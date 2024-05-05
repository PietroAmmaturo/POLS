import {activityOrders} from "~/composables/exploring";
import {orderActivities} from "~/composables/exploring";
import {filterActivities} from "~/composables/exploring";

interface Project {
    id:number,
    name:string,
    picture:string,
    description:string,
    responsible:number,
    tags: any[]
}

// store/projectsStore.ts
export const useProjectStore = defineStore('projects', () => {
    const supabase = useSupabaseClient();

    const projects = reactive([] as Project[]);

    async function init() {
        try {
            const { data, error } = await supabase.from('Project').select('*');
            if (error) {
                throw error;
            }
            if (data) {
                projects.splice(0, projects.length, ...data);
            }
        } catch (error) {
            console.error('Error initializing projects:', error);
        }
    }

    const getProjectById = (id: number) => computed(() => projects.find(project => project.id === id));

    const getProjects = (filter: Ref<string>, order:  Ref<string>) => computed(() => {
        console.log(filter.value, order.value)
        if (!filter.value && !order.value) return projects;
        if (!filter.value) return orderActivities(projects, order.value);
        if (!order.value) return filterActivities(projects, filter.value);
        return orderActivities(filterActivities(projects, filter.value), order.value);
    });

    const getProjectsFilters = () => computed(() => Array.from(new Set(projects.flatMap(project => project.tags))));

    const getProjectsOrders = () => computed(() => activityOrders);

    init();

    return { projects, getProjectById, getProjects, getProjectsFilters, getProjectsOrders };
});