interface Service {
    name:string,
    picture:string
    description:string
    information:string
    responsible:number
}

export const useServiceStore = defineStore('Service', () => {
    const supabase = useSupabaseClient();

    const Service = reactive([] as Service[]);

    async function init() {
        try {
            const { data, error } = await supabase.from('Service').select('*');
            if (error) {
                throw error;
            }
            if (data) {
                Service.splice(0, Service.length, ...data);
            }
        } catch (error) {
            console.error('Error initializing dogs:', error);
        }
    }

    init();

    return { Service };
});