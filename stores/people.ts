import { type Project } from "./projects"

export interface Person {
    id: number,
    name: string,
    picture: string,
    cv: string,
    description: string
}

export const usePersonStore = defineStore('people', () => {
    const people = reactive([] as Person[]);

    async function init() {
        try {
            const { data, error } = await useFetch("/api/people");
            if (data && data.value) people.splice(0, people.length, ...data.value);
        } catch (error) {
            console.error('Error initializing projects:', error);
        }
    }

    const getPersonById = (id: number) => computed(() => people.find(person => person.id === id));

    const getPersonByProject = (project: Project) => computed(() => {
        const personId = project.responsible;
        return people.find(person => person.id === personId);
    });

    const getPersonByService = (service: Service) => computed(() => {
        const personId = service.responsible;
        return people.find(person => person.id === personId);
    });

    const getPeople = () => computed(() => {
        return people;
    });

    init();

    return { people, getPersonById, getPersonByProject, getPersonByService, getPeople};
});