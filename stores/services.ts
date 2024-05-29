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
  const services = reactive([] as Service[]);

  async function init() {
    try {
      const { data, error } = await useFetch("/api/services");
      if (data && data.value) services.splice(0, services.length, ...data.value);
    } catch (error) {
      console.error('Error initializing projects:', error);
    }
  }

  const getServiceById = (id: number) => computed(() => services.find(service => service.id === id));

  const getServices = (filter: Ref<string>, order:  Ref<string>) => computed(() => {
    if (!filter.value && !order.value) return services;
    if (!filter.value) return orderActivities(services, order.value);
    if (!order.value) return filterActivities(services, filter.value);
    return orderActivities(filterActivities(services, filter.value), order.value);
  });

  const getServicesByPerson = (filter: number) => computed (() => {
    if (!filter) return services;
    return services.filter(service => service.responsible==filter);
  });

  const getServicesFilters = () => computed(() => Array.from(new Set(services.flatMap(service => service.tags))));

  const getServicesOrders = () => computed(() => activityOrders);

  init();

  return { services, getServiceById, getServices, getServicesFilters, getServicesOrders, getServicesByPerson};
});