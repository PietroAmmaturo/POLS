<script setup lang="ts">
import Navbar from "~/components/NavigationBar.vue";

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
  }
})
import { useProjectStore } from '~/stores/projects';
import ActivityResponsible from "~/components/ActivityResponsible.vue";
import ProjectsBanner from "~/components/ProjectsBanner.vue";
const route = useRoute();
const store = useProjectStore();
const id = parseInt(route.params.id as string);
const project = store.getProjectById(id);
const parents = ref([
  { page: 'All the activities', path: '/activities' },
  { page: 'All the projects', path: '/projects'}
]);
const currentPage = project.value != undefined ? project.value.name : null;
</script>

<template>
  <Breadcrumb :parents="parents" :current-page="currentPage"></Breadcrumb>
    <ActivityHeader v-if="project" :title="project.name" :subtitle="project.description" :picture="project.picture" >
    </ActivityHeader>
    <section>
      <ProjectsBanner ></ProjectsBanner>
    </section>
    <ActivityResponsible>
    </ActivityResponsible>

</template>

<style scoped>
</style>