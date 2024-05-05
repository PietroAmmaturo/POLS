<script setup lang="ts">
import { useProjectStore } from '~/stores/projects';
import {activityOrders} from "~/composables/ordering";
import {orderActivities} from "~/composables/ordering";

const store = useProjectStore();
const tags = store.getProjectsFilters();
const selectedTag = ref("");
const selectedOrder = ref("");
const projects = store.getFilteredProjects(selectedTag);
const orders = activityOrders;
function updateTag(tag: string) {
  selectedTag.value = tag;
}
function updateOrder(order: string) {
  selectedOrder.value = order;
  orderActivities(projects.value, selectedOrder.value);
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