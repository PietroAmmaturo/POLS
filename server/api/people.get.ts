import {getBotResponse} from "~/composables/chatbot";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event);
    const people = (await supabase.from('Person').select('*'));
    return people.data;
});