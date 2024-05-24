import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event);
    const services = (await supabase.from('Service').select('*'));
    return services.data;
});