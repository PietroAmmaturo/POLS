interface Project {
    id:number,
    name:string,
    picture:string,
    description:string,
    responsible:number
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

    async function getProjectById(id: number) {
            return projects.find((project) => project.id === id);
    }

    init();

    return { projects, getProjectById };
});