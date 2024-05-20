<script setup lang="ts">

import ActivitiesBanner from "~/components/ActivitiesBanner.vue";

definePageMeta({
  validate: async (route) => {
    return (!route.query.tag || typeof route.query.tag === 'string');
  }
})
const projectStore = useProjectStore()
const serviceStore = useServiceStore()

const projectsTags = projectStore.getProjectsFilters();
const projectsOrders = projectStore.getProjectsOrders();

const serviceTags = serviceStore.getServicesFilters();
const serviceOrders = serviceStore.getServicesOrders();

// Union of tags, since at most it returns an empty list
const tags = computed( () => [...new Set([...projectsTags.value, ...serviceTags.value])]);
// Intersection of orderings, since specific orderings might not be supported from one of the two
const orders = computed( () => [...new Set(projectsOrders.value.filter(value => serviceOrders.value.includes(value)))]);

const route = useRoute();
const selectedTag = route.query.tag ? ref(route.query.tag as string) : ref("");
const selectedOrder = ref("");

const projects = projectStore.getProjects(selectedTag, selectedOrder);
const services = serviceStore.getServices(selectedTag, selectedOrder);

function updateTag(tag: string) {
  selectedTag.value = tag;
}
function updateOrder(order: string) {
  selectedOrder.value = order;
}
const projectsFound = ref(true);
const servicesFound = ref(true);
onMounted(() => {
  if (projects.value && projects.value.length === 0) projectsFound.value = false;
  if (services.value && services.value.length === 0) servicesFound.value = false;
})
</script>

<template>
  <ActivitiesHeader title="Activities" subtitle="Our actvities are ...">
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
    <template #showcase>
      <ActivitiesExplorerShowcaseDouble>
        <template #projects>
          <ActivitiesBanner class="banner" align="right" :path="'/projects?tag='+selectedTag" title="PROJECTS"></ActivitiesBanner>
          <ActivitiesExplorerShowcase>
            <transition-group v-if="projects.length" name="bounce-fade" appear>
              <ActivityCard v-for="(activity) in projects" :key="activity.id" :name="activity.name" :picture="activity.picture"
                            type="project" :id="activity.id">
              </ActivityCard>
            </transition-group>
            <AppLoader v-else-if="projectsFound"></AppLoader>
            <p v-else>There are no projects with the selected tag.</p>
          </ActivitiesExplorerShowcase>
        </template>
        <template #services>
          <ActivitiesBanner class="banner"  align="left" :path="'/services?tag='+selectedTag" title="SERVICES"></ActivitiesBanner>
          <ActivitiesExplorerShowcase>
            <transition-group v-if="services.length" name="bounce-fade" appear>
              <ActivityCard v-for="(activity) in services" :key="activity.id" :name="activity.name" :picture="activity.picture"
                            type="service" :id="activity.id">
              </ActivityCard>
            </transition-group>
            <AppLoader v-else-if="servicesFound"></AppLoader>
            <p v-else>There are no services with the selected tag.</p>
          </ActivitiesExplorerShowcase>
        </template>
      </ActivitiesExplorerShowcaseDouble>
    </template>
  </ActivitiesExplorer>
</template>

<style>
.banner {
  width: 100%;
}
</style>