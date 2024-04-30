interface Service {
    id:number,
    name:string,
    picture:string
    description:string
    information:string
    responsible:number
}

// store/servicesStore.ts

export const useServiceStore = defineStore('services', () => {
    const supabase = useSupabaseClient();

    const services = reactive([] as Service[]);

    async function init() {
        try {
            const { data, error } = await supabase.from('Service').select('*');
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

    init();

    return { services };
});