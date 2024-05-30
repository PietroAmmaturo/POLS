<script setup lang="ts">
  import { useServiceStore } from '~/stores/services';
  import ActivitiesExplorerShowcaseIndividual from "~/components/ActivitiesExplorerShowcaseIndividual.vue";

  const store = useServiceStore();
  const tags = store.getServicesFilters();
  const orders = store.getServicesOrders();
  const route = useRoute();
  const selectedTag = route.query.tag ? ref(route.query.tag as string) : ref("");
  const selectedOrder = ref("");
  const services = store.getServices(selectedTag, selectedOrder);

  function updateTag(tag: string) {
    selectedTag.value = tag;
    const router = useRouter()
    router.push({
      path: '/services',
      query: { tag: tag },
    })
  }
  function updateOrder(order: string) {
    selectedOrder.value = order;
  }
  const servicesFound = computed(() => services.value.length  !== 0);
</script>

<template>
  <Breadcrumb current-alias="All the services"></Breadcrumb>
  <ActivitiesHeader title="Services" subtitle="Our center provides essential services to address immediate needs and offer critical support to survivors of domestic violence.
These services include crisis intervention, offering immediate assistance and shelter to those in danger.
Counseling and therapy sessions are available to help survivors process their experiences and begin the healing journey.

Legal assistance is provided to navigate the complexities of the legal system, obtain restraining orders, and seek justice.
Additionally, we offer advocacy services to ensure survivors' voices are heard and their rights are protected.
Our commitment to providing compassionate and comprehensive care ensures that every woman receives the support and resources she needs to rebuild her life with safety and dignity.">
  </ActivitiesHeader>
  <ActivitiesExplorer @filter-selected="updateTag" :filters="tags" :initial-filter="selectedTag" @order-selected="updateOrder" :orders="orders">
    <template #showcase>
      <ActivitiesExplorerShowcaseIndividual>
        <transition-group v-if="services.length"  name="bounce-fade" appear>
          <ActivityCard v-for="(service) in services" type="service" :key="service.name" :name="service.name" :picture="service.picture" :id="service.id">
          </ActivityCard>
          </transition-group>
        <AppLoader v-else-if="servicesFound"></AppLoader>
        <p v-else>There are no services with the selected tag.</p>
      </ActivitiesExplorerShowcaseIndividual>
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