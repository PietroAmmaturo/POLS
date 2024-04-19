interface Dog {
    name:string,
    breed:string
}

// store/dogsStore.ts

export const useDogStore = defineStore('dogs', () => {
    const supabase = useSupabaseClient();

    const dogs = reactive([] as Dog[]);

    async function init() {
        try {
            const { data, error } = await supabase.from('dogs').select('*');
            if (error) {
                throw error;
            }
            if (data) {
                dogs.splice(0, dogs.length, ...data);
            }
        } catch (error) {
            console.error('Error initializing dogs:', error);
        }
    }

    init();

    return { dogs };
});