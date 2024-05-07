<script setup lang="ts">
import {useProjectStore} from '~/stores/projects';
import {useBreadcrumbStore} from "~/stores/breadcrumbs";

const store = useProjectStore();
const tags = store.getProjectsFilters();
const orders = store.getProjectsOrders();

const selectedTag = ref("");
const selectedOrder = ref("");
const projects = store.getProjects(selectedTag, selectedOrder);

const breadcrumbStore = useBreadcrumbStore();
const parents = breadcrumbStore.breadcrumbs;
const currentPage = "All the projects";
const currentPath = "/projects";
breadcrumbStore.updateBreadcrumbs(currentPage, currentPath);

function updateTag(tag: string) {
  selectedTag.value = tag;
}
function updateOrder(order: string) {
  selectedOrder.value = order;
}
</script>

<template>
  <Breadcrumb :parents="parents" :current-page="currentPage"></Breadcrumb>
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
        <transition-group name="bounce-fade" appear>
          <ActivityCard v-for="(project) in projects" type="project" :key="project.name" :name="project.name" :picture="project.picture" :id="project.id">
          </ActivityCard>
          </transition-group>
      </ActivitiesExplorerShowcase>
    </template>
  </ActivitiesExplorer>
</template>

<style>
</style>
