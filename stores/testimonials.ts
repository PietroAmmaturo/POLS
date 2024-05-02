interface Testimonial {
    id:number,
    text:string,
    author:string
    referTo:number
}

// store/testimonialsStore.ts

export const useTestimonialStore = defineStore('testimonials', () => {
    const supabase = useSupabaseClient();

    const testimonials = reactive([] as Testimonial[]);

    async function init() {
        try {
            const { data, error } = await supabase.from('Testimonial').select('*');
            if (error) {
                throw error;
            }
            if (data) {
                testimonials.splice(0, testimonials.length, ...data);
            }
        } catch (error) {
            console.error('Error initializing testimonials:', error);
        }
    }

    init();

    return { testimonials };
});