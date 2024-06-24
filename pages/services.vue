<script setup lang="ts">
import { useServiceStore } from '~/stores/services';

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

useSeoMeta({
  title: "MEDUSA - Our Services",
  description: "Our Services to address immediate needs and offer support to Women"
})
</script>

<template>
  <Breadcrumb current-alias="All the services"></Breadcrumb>
  <ActivitiesHeader title="Services" subtitle="Our center provides essential services to <strong>address immediate needs and offer critical support</strong> to survivors of domestic violence.
These services include <strong>crisis intervention</strong>, offering immediate assistance and shelter to those in danger.
<strong>Counseling and therapy sessions</strong> are available to help survivors process their experiences and <strong>begin the healing journey</strong>.

<strong>Legal assistance</strong> is provided to navigate the complexities of the legal system, obtain restraining orders, and seek justice.
Additionally, we offer advocacy services to ensure survivors' voices are heard and their rights are protected.
Our commitment to providing compassionate and comprehensive care ensures that <strong>every woman receives the support and resources</strong> she needs to rebuild her life with safety and dignity.">
  </ActivitiesHeader>
  <ActivitiesExplorer @filter-selected="updateTag" :filters="tags" :initial-filter="selectedTag" @order-selected="updateOrder" :orders="orders">
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
  strong{
    color: var(--accent);
  }
</style>
