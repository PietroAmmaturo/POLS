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

function updateTag(tag: string) {
  selectedTag.value = tag;
  const router = useRouter()
  router.push({
    path: '/projects',
    query: { tag: tag },
  })
}
function updateOrder(order: string) {
  selectedOrder.value = order;
}
const projectsFound = computed(() => projects.value.length  !== 0);
</script>

<template>
  <Breadcrumb current-alias="All the projects"></Breadcrumb>
  <ActivitiesHeader title="Projects" subtitle="Our center offers various projects designed for <strong>long-term empowerment and self-sufficiency</strong>.
These projects include <strong>educational workshops</strong> that cover topics such as financial literacy, career development, and personal safety.
By equipping women with essential knowledge and skills, we help them build a <strong>foundation for a brighter future</strong>.

Additionally, our job readiness programs <strong>prepare women for the workforce</strong>, offering resume building, interview preparation, and job placement assistance.
Community-building initiatives foster a <strong>sense of solidarity and support</strong>, creating a network of strong, empowered women.
These projects collectively aim to <strong>restore confidence and independence</strong> in the lives of survivors.">
  </ActivitiesHeader>
  <ActivitiesExplorer @filter-selected="updateTag" :filters="tags" :initial-filter="selectedTag" @order-selected="updateOrder" :orders="orders">
    <template  #showcase>
      <ActivitiesExplorerShowcase class="larger">
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
strong{
  color: var(--accent);
}
.larger{
  width: 100% !important;
}
</style>
