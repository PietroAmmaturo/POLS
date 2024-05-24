export interface Testimonial {
  id:number,
  text:string,
  author:string,
  referTo:number
}

// store/testimonialsStore.ts

export const useTestimonialStore = defineStore('testimonials', () => {
  const supabase = useSupabaseClient();

  const testimonials = reactive([] as Testimonial[]);

  async function init() {
    try {
      const { data, error } = await useFetch("/api/testimonials");
      if (data && data.value) testimonials.splice(0, testimonials.length, ...data.value);
    } catch (error) {
      console.error('Error initializing projects:', error);
    }
  }
  const getTestimonialsByServiceId = (id: number) => computed(() => testimonials.filter(testimonial => testimonial.referTo === id));

  init();

  return { testimonials, getTestimonialsByServiceId };
});