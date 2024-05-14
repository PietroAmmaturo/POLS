<script setup lang="ts">
  import { useServiceStore } from '~/stores/services';

  const store = useServiceStore();
  const tags = store.getServicesFilters();
  const orders = store.getServicesOrders();
  const route = useRoute();
  const selectedTag = route.query.tag ? ref(route.query.tag as string) : ref("");
  const selectedOrder = ref("");
  const services = store.getServices(selectedTag, selectedOrder);

  const currentPage = "All the services";

  function updateTag(tag: string) {
    selectedTag.value = tag;
  }
  function updateOrder(order: string) {
    selectedOrder.value = order;
  }

  const servicesFound = ref(true);
  onMounted(() => {
    if (services.value && services.value.length === 0) servicesFound.value = false;
  })
  watch(services, newValue => (newValue && newValue.length === 0) ? servicesFound.value = false : null)
</script>

<template>
  <Breadcrumb :current-page="currentPage" :current-alias="currentPage"></Breadcrumb>
  <ActivitiesHeader title="Services" subtitle="Our services are ...">
  </ActivitiesHeader>
  <section class="description">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </section>
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
        <transition-group v-if="services.length"  name="bounce-fade" appear>
          <ActivityCard v-for="(service) in services" type="service" :key="service.name" :name="service.name" :picture="service.picture" :id="service.id">
          </ActivityCard>
          </transition-group>
        <AppLoader v-else-if="servicesFound"></AppLoader>
        <p v-else>There are no services with the selected tag.</p>
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