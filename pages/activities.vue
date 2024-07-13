<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import AppLoadMore from "~/components/AppLoadMore.vue";

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

const showIncrement = 10;
const projectsShowNumber = ref((window && window.innerWidth >= 790) ? 10 : 2);
const projectsMaxNumber = computed(() => projectStore.getProjects(selectedTag, selectedOrder).value.length);
const projects = computed(() => projectStore.getProjects(selectedTag, selectedOrder).value.slice(0, projectsShowNumber.value));

const servicesShowNumber = ref(window && window.innerWidth >= 790 ? 10 : 2);
const servicesMaxNumber = computed(() => serviceStore.getServices(selectedTag, selectedOrder).value.length);
const services = computed(() => serviceStore.getServices(selectedTag, selectedOrder).value.slice(0, servicesShowNumber.value));


function updateTag(tag: string) {
  selectedTag.value = tag;
  const router = useRouter()
  router.push({
    path: '/activities',
    query: { tag: tag },
  })
}
function updateOrder(order: string) {
  selectedOrder.value = order;
}
const projectsFound = computed(() => projects.value.length  !== 0);
const servicesFound = computed(() => services.value.length  !== 0);
function showMoreProjects() {
  projectsShowNumber.value += showIncrement;
}
function showMoreServices() {
  servicesShowNumber.value += showIncrement;
}
useSeoMeta({
  title: "MEDUSA - Our Activities",
  description: "All our Activities, Projects and Services to help Women"
})
</script>

<template>
  <AppStructuralLinker class="strclnk" family-page="activities"></AppStructuralLinker>
  <a href="#top"><div class="scrollToTop"><font-awesome-icon class="breadcrumb-icon" icon="chevron-up"/></div></a>
  <NuxtLoadingIndicator />
  <AppHeader title="All our activities" subtitle="Our center offers a range of activities divided into <strong>projects and services</strong>.
Projects focus on <strong>long-term empowerment</strong>, including educational workshops, job readiness programs, and community-building initiatives.
These projects aim to equip women with the <strong>skills and confidence</strong> needed to <strong>rebuild their lives and achieve independence</strong>.

Services provide <strong>immediate and essential support</strong>, addressing urgent needs.
This includes crisis intervention, emergency shelter, counseling, and legal assistance.
Our team is dedicated to offering <strong>compassionate and personalized help</strong>, ensuring that every woman receives the care and resources necessary to navigate and overcome the challenges of domestic violence.">
  </AppHeader>
  <Explorer @filter-selected="updateTag" :filters="tags" :initial-filter="selectedTag" @order-selected="updateOrder" :orders="orders">
    <template #showcase class="showcase-double">
      <ExplorerActivitiesShowcase>
        <template #projects>
          <ExplorerShowcase>
            <transition-group v-if="projects.length" name="bounce-fade" appear>
              <ActivityCard v-for="(activity) in projects" :key="activity.id" :name="activity.name" :picture="activity.picture"
                            type="project" :id="activity.id">
              </ActivityCard>
            </transition-group>
            <AppLoader v-else-if="projectsFound"></AppLoader>
            <p v-else>There are no projects with the selected tag.</p>
          </ExplorerShowcase>
          <AppLoadMore v-if="(projectsShowNumber < projectsMaxNumber)" @click="showMoreProjects()">LOAD MORE</AppLoadMore>
        </template>
        <template #services>
          <ExplorerShowcase id="services">
            <TransitionGroup v-if="services.length" name="bounce-fade" appear>
              <ActivityCard v-for="(activity) in services" :key="activity.id" :name="activity.name" :picture="activity.picture"
                            type="service" :id="activity.id">
              </ActivityCard>
            </TransitionGroup>
            <AppLoader v-else-if="servicesFound"></AppLoader>
            <p v-else>There are no services with the selected tag.</p>
          </ExplorerShowcase>
          <AppLoadMore v-if="(servicesShowNumber < servicesMaxNumber)" @click="showMoreServices()">LOAD MORE</AppLoadMore>
        </template>
      </ExplorerActivitiesShowcase>
    </template>
  </Explorer>
</template>

<style>
strong{
  color: var(--accent);
}
.strclnk{
  display: none !important;
  @media screen and (max-width: 780px){
    display: flex !important;
  }
}
.scrollToTop{
  display: none;
  align-items: center;
  justify-content: center;
  background: var(--accent);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 10;
  @media screen and (max-width: 780px){
    display: flex;
  }
}
.showcase-double {
  position: relative;
  top: 100px;
}
</style>