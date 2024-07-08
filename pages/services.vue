<script setup lang="ts">
import { useServiceStore } from '~/stores/services';

const store = useServiceStore();
const tags = store.getServicesFilters();
const orders = store.getServicesOrders();
const route = useRoute();
const selectedTag = route.query.tag ? ref(route.query.tag as string) : ref("");
const selectedOrder = ref("");
const showNumber = ref(10);
const showIncrement = 10;
const maxNumber = computed(() => store.getServices(selectedTag, selectedOrder).value.length);
const services = computed(() => store.getServices(selectedTag, selectedOrder).value.slice(0, showNumber.value));
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
function showMore() {
  showNumber.value += showIncrement;
}
useSeoMeta({
  title: "MEDUSA - Our Services",
  description: "Our Services to address immediate needs and offer support to Women"
})
</script>

<template>
  <AppBreadcrumb current-alias="All services"></AppBreadcrumb>
  <AppHeader title="Services" subtitle="Our center provides essential services to <strong>address immediate needs and offer critical support</strong> to survivors of domestic violence.
These services include <strong>crisis intervention</strong>, offering immediate assistance and shelter to those in danger.
<strong>Counseling and therapy sessions</strong> are available to help survivors process their experiences and <strong>begin the healing journey</strong>.

<strong>Legal assistance</strong> is provided to navigate the complexities of the legal system, obtain restraining orders, and seek justice.
Additionally, we offer advocacy services to ensure survivors' voices are heard and their rights are protected.
Our commitment to providing compassionate and comprehensive care ensures that <strong>every woman receives the support and resources</strong> she needs to rebuild her life with safety and dignity.">
  </AppHeader>
  <Explorer @filter-selected="updateTag" :filters="tags" :initial-filter="selectedTag" @order-selected="updateOrder" :orders="orders">
    <template #showcase>
      <ExplorerShowcase>
        <transition-group v-if="services.length"  name="bounce-fade" appear>
          <ActivityCard v-for="(service) in services" type="service" :key="service.name" :name="service.name" :picture="service.picture" :id="service.id">
          </ActivityCard>
        </transition-group>
        <AppLoader v-else-if="servicesFound"></AppLoader>
        <p v-else>There are no services with the selected tag.</p>
      </ExplorerShowcase>
      <AppLoadMore v-if="(showNumber < maxNumber)" @click="showMore()">LOAD MORE</AppLoadMore>
    </template>
  </Explorer>
</template>

<style scoped>
  strong{
    color: var(--accent);
  }
</style>
