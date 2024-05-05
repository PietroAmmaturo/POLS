<script setup lang="ts">
import { useProjectStore } from '~/stores/projects';

const store = useProjectStore();
const tags = store.getProjectsFilters();
const orders = store.getProjectsOrders();

const selectedTag = ref("");
const selectedOrder = ref("");
const projects = store.getProjects(selectedTag, selectedOrder);
function updateTag(tag: string) {
  selectedTag.value = tag;
}
function updateOrder(order: string) {
  selectedOrder.value = order;
}
</script>

<template>
  <ActivitiesHeader title="Projects" subtitle="Our projects are ...">
  </ActivitiesHeader>
  <ActivitiesExplorer>
    <template #options>
      <ActivitiesExplorerOptions>
        <ActivitiesExplorerOptionsFilter @filter-selected="updateTag" :filters="tags">
        </ActivitiesExplorerOptionsFilter>
        <ActivitiesExplorerOptionsOrder @order-selected="updateOrder" :orders="orders">
        </ActivitiesExplorerOptionsOrder>
      </ActivitiesExplorerOptions>
    </template>
    <template  #showcase>
      <ActivitiesExplorerShowcase>
        <ActivityCard v-for="(project, index) in projects" :key="index" :name="project.name" :picture="project.picture" :type="'project'" :id="project.id">
        </ActivityCard>
      </ActivitiesExplorerShowcase>
    </template>
  </ActivitiesExplorer>
</template>