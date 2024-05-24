<script setup lang="ts">
import {useProjectStore} from '~/stores/projects';
import ActivitiesExplorerShowcaseIndividual from "~/components/ActivitiesExplorerShowcaseIndividual.vue";
definePageMeta({
  validate: async (route) => {
    return (!route.query.tag || typeof route.query.tag === 'string');
  }
})
const store = useProjectStore();
const tags = store.getProjectsFilters();
const orders = store.getProjectsOrders();

const route = useRoute();
const selectedTag = route.query.tag ? ref(route.query.tag as string) : ref("");
const selectedOrder = ref("");
const projects = store.getProjects(selectedTag, selectedOrder);

const currentPage = "All the projects";

function updateTag(tag: string) {
  selectedTag.value = tag;
}
function updateOrder(order: string) {
  selectedOrder.value = order;
}

const projectsFound = ref(true);
onMounted(() => {
  if (projects.value && projects.value.length === 0) projectsFound.value = false;
})
</script>

<template>
  <Breadcrumb :current-page="currentPage" :current-alias="currentPage"></Breadcrumb>
  <ActivitiesHeader title="Projects" subtitle="Our center offers various projects designed for long-term empowerment and self-sufficiency.
These projects include educational workshops that cover topics such as financial literacy, career development, and personal safety.
By equipping women with essential knowledge and skills, we help them build a foundation for a brighter future.

Additionally, our job readiness programs prepare women for the workforce, offering resume building, interview preparation, and job placement assistance.
Community-building initiatives foster a sense of solidarity and support, creating a network of strong, empowered women.
These projects collectively aim to restore confidence and independence in the lives of survivors.">
  </ActivitiesHeader>
  <ActivitiesExplorer @filter-selected="updateTag" :filters="tags" :initial-filter="selectedTag" @order-selected="updateOrder" :orders="orders">
    <template  #showcase>
      <ActivitiesExplorerShowcaseIndividual>
        <transition-group v-if="projects.length" name="bounce-fade" appear>
          <ActivityCard v-for="(project) in projects" type="project" :key="project.name" :name="project.name" :picture="project.picture" :id="project.id">
          </ActivityCard>
          </transition-group>
        <AppLoader v-else-if="projectsFound"></AppLoader>
        <p v-else>There are no projects with the selected tag.</p>
      </ActivitiesExplorerShowcaseIndividual>
    </template>
  </ActivitiesExplorer>
</template>

<style>
</style>
