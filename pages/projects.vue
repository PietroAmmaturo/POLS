<script setup lang="ts">
import {useProjectStore} from '~/stores/projects';
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
watch(projects, newValue => (newValue && newValue.length === 0) ? projectsFound.value = false : null)
</script>

<template>
  <Breadcrumb :current-page="currentPage" :current-alias="currentPage"></Breadcrumb>
  <ActivitiesHeader title="Projects" subtitle="Our projects are ...">
  </ActivitiesHeader>
  <ActivitiesExplorer>
    <template #options>
      <ActivitiesExplorerOptions>
        <ActivitiesExplorerOptionsFilter @filter-selected="updateTag" :filters="tags" :initial-filter="selectedTag">
        </ActivitiesExplorerOptionsFilter>
        <ActivitiesExplorerOptionsOrder @order-selected="updateOrder" :orders="orders">
        </ActivitiesExplorerOptionsOrder>
      </ActivitiesExplorerOptions>
    </template>
    <template  #showcase>
      <ActivitiesExplorerShowcase>
        <transition-group v-if="projects.length" name="bounce-fade" appear>
          <ActivityCard v-for="(project) in projects" type="project" :key="project.name" :name="project.name" :picture="project.picture" :id="project.id">
          </ActivityCard>
          </transition-group>
        <AppLoader v-else-if="projectsFound"></AppLoader>
        <p v-else>There are no projects with the selected tag.</p>
      </ActivitiesExplorerShowcase>
    </template>
  </ActivitiesExplorer>
</template>

<style>
</style>
