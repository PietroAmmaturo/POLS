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
import {useBreadcrumbStore} from "~/stores/breadcrumbs";
const route = useRoute();
const store = useProjectStore();
const id = parseInt(route.params.id as string);
const project = store.getProjectById(id);

const breadcrumbStore = useBreadcrumbStore();
const parents = breadcrumbStore.breadcrumbs;
const currentPage = project.value ? project.value.name : "Project";
const currentPath = "/project/" + route.params.id;
breadcrumbStore.updateBreadcrumbs(currentPage, currentPath, "Project");
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