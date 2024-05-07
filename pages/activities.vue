<script setup lang="ts">
import {orderActivities} from "~/composables/exploring";

// TODO: move most of this logic either in a store or in composable (enhancement)

const projectStore = useProjectStore()
const serviceStore = useServiceStore()

const projectsTags = projectStore.getProjectsFilters();
const projectsOrders = projectStore.getProjectsOrders();

const serviceTags = serviceStore.getServicesFilters();
const serviceOrders = serviceStore.getServicesOrders();

const selectedTag = ref("");
const selectedOrder = ref("");

// Union of tags, since at most it returns an empty list
const tags = computed( () => [...new Set([...projectsTags.value, ...serviceTags.value])]);
// Intersection of orderings, since specific orderings might not be supported from one of the two
const orders = computed( () => [...new Set(projectsOrders.value.filter(value => serviceOrders.value.includes(value)))]);

const projects = projectStore.getProjects(selectedTag, selectedOrder);
const services = serviceStore.getServices(selectedTag, selectedOrder);

const activities =  computed( () => {
  const typedServices = services.value ? services.value.map(s => ({...s, type: "services"})) : [];
  const typedProjects = projects.value ? projects.value.map(p => ({...p, type: "project"})) : [];
  return orderActivities([...typedServices, ...typedProjects], selectedOrder.value);
});

function updateTag(tag: string) {
  selectedTag.value = tag;
}
function updateOrder(order: string) {
  selectedOrder.value = order;
}
const currentPage = "All the activities";

</script>

<template>
  <Breadcrumb :current-page="currentPage"></Breadcrumb>
  <ActivitiesHeader title="Activities" subtitle="Our actvities are ...">
  </ActivitiesHeader>
  <ActivitiesCategories></ActivitiesCategories>
  <ActivitiesExplorerOptions>
    <ActivitiesExplorerOptionsFilter @filter-selected="updateTag" :filters="tags">
    </ActivitiesExplorerOptionsFilter>
    <ActivitiesExplorerOptionsOrder @order-selected="updateOrder" :orders="orders">
    </ActivitiesExplorerOptionsOrder>
  </ActivitiesExplorerOptions>
  <ActivitiesExplorerShowcase>
    <transition-group name="bounce-fade" appear>
      <ActivityCard v-for="(activity) in activities" :key="[activity.type, activity.id]" :name="activity.name" :picture="activity.picture" :type="activity.type" :id="activity.id">
      </ActivityCard>
    </transition-group>
  </ActivitiesExplorerShowcase>
</template>