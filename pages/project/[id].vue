<script setup lang="ts">
import ActivityTags from "~/components/ActivityTags.vue";

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
  }
})
import { useProjectStore } from '~/stores/projects';
import { usePersonStore } from "~/stores/people";
import ActivityResponsible from "~/components/ActivityResponsible.vue";
import ActivitiesBanner from "~/components/ActivitiesBanner.vue";

const route = useRoute();
const projectStore = useProjectStore();
const personStore = usePersonStore();
const id = parseInt(route.params.id as string);
const project = projectStore.getProjectById(id);
const person = computed(() => project.value ? personStore.getPersonByProject(project.value) : undefined).value; 

</script>

<template>
  <div v-if="project" >
    <Breadcrumb :current-page="project.name" current-alias="Project"></Breadcrumb>
    <ActivityHeader :title="project.name" :subtitle="project.description" :picture="project.picture" >
    </ActivityHeader>
    <section>
      <ActivitiesBanner align="center" path="/projects" title="PROJECTS" ></ActivitiesBanner>
    </section>
    <ActivityResponsible :person="person"> 
    </ActivityResponsible>
    <section>
      <ActivityTags :tags="project.tags"></ActivityTags>
    </section>
  </div>

</template>

<style scoped>
</style>