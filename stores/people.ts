import { type Project } from "./projects"

interface Person {
    id: number,
    name: string,
    picture: string,
    cv: string,
    description: string
}

export const usePersonStore = defineStore('people', () => {
    const supabase = useSupabaseClient();

    const people = reactive([] as Person[]);

    async function init() {
        try {
            const { data, error } = await supabase.from('Person').select('*');
            if (error) {
                throw error;
            }
            if (data) {
                people.splice(0, people.length, ...data);
            }
        } catch (error) {
            console.error('Error initializing people:', error);
        }
    }

    const getPersonById = (id: number) => computed(() => people.find(person => person.id === id));

    const getPersonByProject = (project: Project) => computed(() => {
        const personId = project.responsible;
        return people.find(person => person.id === personId);
    });

    const getPeople = () => computed(() => {
        return people;
    });

    init();

    return { people, getPersonById, getPersonByProject, getPeople};
});