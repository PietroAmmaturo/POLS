<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
  }
})
import { useProjectStore } from '~/stores/projects';
import ActivityResponsible from "~/components/ActivityResponsible.vue";
import ActivitiesBanner from "~/components/ActivitiesBanner.vue";
const route = useRoute();
const store = useProjectStore();
const id = parseInt(route.params.id as string);
const project = store.getProjectById(id);

</script>

<template>
  <Breadcrumb v-if="project" :current-page="project.name" current-alias="Project"></Breadcrumb>
    <ActivityHeader v-if="project" :title="project.name" :subtitle="project.description" :picture="project.picture" >
    </ActivityHeader>
    <section>
      <ActivitiesBanner align="center" path="/projects" title="PROJECTS" subtitle="Click here for an overview of our initiatives and accomplishments. Dive into a curated selection of our PROJECTS spanning various domains. Click to explore further in the all projects section."></ActivitiesBanner>
    </section>
    <ActivityResponsible>
    </ActivityResponsible>

</template>

<style scoped>
</style>