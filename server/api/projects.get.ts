import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event);
    const projects = (await supabase.from('Project').select('*'));
    return projects.data;
});