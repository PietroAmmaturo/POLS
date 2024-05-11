import {activityOrders} from "~/composables/exploring";
import {orderActivities} from "~/composables/exploring";
import {filterActivities} from "~/composables/exploring";


export interface Service extends Activity{
  description:string,
  information:string,
  responsible:number,
}

// store/servicesStore.ts

export const useServiceStore = defineStore('services', () => {
  const supabase = useSupabaseClient();

  const services = reactive([] as Service[]);

  async function init() {
    try {
      const {data, error} = await supabase.from('Service').select('*');
      if (error) {
        throw error;
      }
      if (data) {
        services.splice(0, services.length, ...data);
      }
    } catch (error) {
      console.error('Error initializing services:', error);
    }
  }

  const getServiceById = (id: number) => computed(() => services.find(service => service.id === id));

  const getServices = (filter: Ref<string>, order:  Ref<string>) => computed(() => {
    console.log(filter.value, order.value)
    if (!filter.value && !order.value) return services;
    if (!filter.value) return orderActivities(services, order.value);
    if (!order.value) return filterActivities(services, filter.value);
    return orderActivities(filterActivities(services, filter.value), order.value);
  });

  const getServicesFilters = () => computed(() => Array.from(new Set(services.flatMap(service => service.tags))));

  const getServicesOrders = () => computed(() => activityOrders);

  init();

  return { services, getServiceById, getServices, getServicesFilters, getServicesOrders };
});