import {getBotResponse} from "~/composables/chatbot";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event);
    const testimonials = (await supabase.from('Testimonial').select('*'));
    return testimonials.data;
});