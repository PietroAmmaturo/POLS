import { type Project } from "./projects"
import {peopleOrders, filterPeopleByGender, orderPeople} from "~/composables/exploring";

export interface Person {
    id: number,
    name: string,
    picture: string,
    cv: string,
    description: string,
    gender: string
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

    // Filtering people is a bit different since the filtering happens by gender (which is a string, not an array)
    const getPeopleByGender = (filter:  Ref<string>, order:  Ref<string>) => computed(() => {
        if (!filter.value && !order.value) return people;
        if (!filter.value || filter.value === "all") return orderPeople(people, order.value);
        if (!order.value) return filterPeopleByGender(people, filter.value);
        return orderPeople(filterPeopleByGender(people, filter.value), order.value);
    });

    // Maybe also other kind of filters could be implemented
    const getPeopleOrders = () => computed(() => peopleOrders);
    const getPeopleFilters = () => computed(() => ["all", ...Array.from(new Set(people.flatMap(person => [person.gender])))]);

    init();

    return { people, getPersonById, getPersonByProject, getPersonByService, getPeopleByGender, getPeopleOrders, getPeopleFilters};
});