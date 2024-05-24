import {type Activity, activityOrders} from "~/composables/exploring";
import {orderActivities} from "~/composables/exploring";
import {filterActivities} from "~/composables/exploring";

export interface Project extends Activity{
    description:string,
    responsible:number,
}

// store/projectsStore.ts
export const useProjectStore = defineStore('projects', () => {
    const projects = reactive([] as Project[]);

    async function init() {
        try {
            const { data, error } = await useFetch("/api/projects");
            if (data && data.value) projects.splice(0, projects.length, ...data.value);
        } catch (error) {
            console.error('Error initializing projects:', error);
        }
    }

    const getProjectById = (id: number) => computed(() => {
        return projects.find(project => project.id === id);
    });

    const getProjects = (filter: Ref<string>, order:  Ref<string>) => computed(() => {
        if (!filter.value && !order.value) return projects;
        if (!filter.value) return orderActivities(projects, order.value);
        if (!order.value) return filterActivities(projects, filter.value);
        return orderActivities(filterActivities(projects, filter.value), order.value);
    });

    const getProjectsByPerson = (filter: number) => computed (() => {
        if (!filter) return projects;
        return projects.filter(project => project.responsible==filter);
    });

    const getProjectsFilters = () => computed(() => Array.from(new Set(projects.flatMap(project => project.tags))));

    const getProjectsOrders = () => computed(() => activityOrders);

    init();

    return { projects, getProjectById, getProjects, getProjectsFilters, getProjectsOrders , getProjectsByPerson};
});