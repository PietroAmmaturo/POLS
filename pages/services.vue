<script setup lang="ts">
  import { useServiceStore } from '~/stores/services';
  import {useBreadcrumbStore} from "~/stores/breadcrumbs";

  const store = useServiceStore();
  const tags = store.getServicesFilters();
  const orders = store.getServicesOrders();
  const selectedTag = ref("");
  const selectedOrder = ref("");
  const services = store.getServices(selectedTag, selectedOrder);

  function updateTag(tag: string) {
    selectedTag.value = tag;
  }
  function updateOrder(order: string) {
    selectedOrder.value = order;
  }

  const breadcrumbStore = useBreadcrumbStore();
  const parents = breadcrumbStore.breadcrumbs;
  const currentPage = "All the projects";
  const currentPath = "/projects";
  breadcrumbStore.updateBreadcrumbs(currentPage, currentPath);
</script>

<template>
  <Breadcrumb :parents="parents" :current-page="currentPage"></Breadcrumb>
  <ActivitiesHeader title="Services" subtitle="Our services are ...">
  </ActivitiesHeader>
  <section class="description">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </section>
  <SearchBar>
  </SearchBar>
  <ActivitiesExplorer>
    <template #options>
      <ActivitiesExplorerOptions>
        <ActivitiesExplorerOptionsFilter @filter-selected="updateTag" :filters="tags">
        </ActivitiesExplorerOptionsFilter>
        <ActivitiesExplorerOptionsOrder @order-selected="updateOrder" :orders="orders">
        </ActivitiesExplorerOptionsOrder>
      </ActivitiesExplorerOptions>
    </template>
    <template #showcase>
      <ActivitiesExplorerShowcase>
        <transition-group name="bounce-fade" appear>
          <ActivityCard v-for="(service) in services" type="service" :key="service.name" :name="service.name" :picture="service.picture" :id="service.id">
          </ActivityCard>
          </transition-group>
      </ActivitiesExplorerShowcase>
    </template>
  </ActivitiesExplorer>
</template>

<style scoped>
  .description {
    margin-top: 5%;
    margin-bottom: 5%;
    text-align: center;
  }
</style>