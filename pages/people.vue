<script setup lang="ts">
import {usePersonStore} from '~/stores/people';
definePageMeta({
  validate: async (route) => {
    return (!route.query.gender || typeof route.query.gender === 'string');
  }
})
const store = usePersonStore();
const genders = store.getPeopleFilters();
const orders = store.getPeopleOrders();

const route = useRoute();
const selectedGender = route.query.gender ? ref(route.query.gender as string) : ref("");
const selectedOrder = ref("");
const people = store.getPeopleByGender(selectedGender, selectedOrder);

function updateGender(gender: string) {
  selectedGender.value = gender;
  const router = useRouter()
  router.push({
    path: '/people',
    query: { gender: gender },
  })
}
function updateOrder(order: string) {
  selectedOrder.value = order;
}
const peopleFound = computed(() => people.value.length  !== 0);
</script>

<template>
  <ActivitiesHeader title="People" subtitle="Our people are ...">
  </ActivitiesHeader>
  <ActivitiesExplorer @filter-selected="updateGender" :filters="genders" :initial-filter="selectedGender" @order-selected="updateOrder" :orders="orders">
    <template  #showcase>
      <ActivitiesExplorerShowcase>
        <transition-group v-if="people.length" name="bounce-fade" appear>
          <ActivityCard v-for="(person) in people" type="person" :key="person.name" :name="person.name" :picture="person.picture" :id="person.id">
          </ActivityCard>
          </transition-group>
        <AppLoader v-else-if="peopleFound"></AppLoader>
        <p v-else>There are no people with the selected tag.</p>
      </ActivitiesExplorerShowcase>
    </template>
  </ActivitiesExplorer>
</template>

<style>
</style>
