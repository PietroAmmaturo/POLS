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

    const getFilteredProjects = (filter: Ref<string>) => computed(() => filter.value ? projects.filter(project => project.tags.includes(filter.value)) : projects);

    const getProjectsFilters = () => computed(() => Array.from(new Set(projects.flatMap(project => project.tags))));

    init();

    return { projects, getProjectById, getFilteredProjects, getProjectsFilters };
});