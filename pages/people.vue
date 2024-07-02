<script setup lang="ts">
import {usePersonStore} from '~/stores/people';
import AppLoadMore from "~/components/AppLoadMore.vue";
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
const showNumber = ref(10);
const showIncrement = 10;
const maxNumber = computed(() => store.getPeopleByGender(selectedGender, selectedOrder).value.length);
const people = computed(() => store.getPeopleByGender(selectedGender, selectedOrder).value.slice(0, showNumber.value));
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
function showMore() {
  showNumber.value += showIncrement;
}
useSeoMeta({
  title: "MEDUSA - Our Team",
  description: "The people who work with us to make the MEDUSA Center a reality"
})
</script>

<template>
  <ActivitiesHeader title="People" subtitle="Meet our dedicated team of professionals who are committed to supporting and empowering survivors of domestic violence. Our staff includes counselors, legal advocates, social workers, and volunteers, all working together to provide compassionate and comprehensive care. Together, we strive to make a positive impact and foster a safe, supportive community.">
  </ActivitiesHeader>
    <ActivitiesExplorer @filter-selected="updateGender" :filters="genders" :initial-filter="selectedGender" @order-selected="updateOrder" :orders="orders">
      <template  #showcase>
        <ActivitiesExplorerShowcase class="larger">
        <transition-group v-if="people.length" name="bounce-fade" appear>
            <PersonCard v-for="(person) in people" type="person" :key="person.id" :name="person.name" :picture="person.picture" :id="person.id">
            </PersonCard>
          </transition-group>
          <AppLoader v-else-if="peopleFound"></AppLoader>
          <p v-else>There are no people with the selected tag.</p>
        </ActivitiesExplorerShowcase>
        <AppLoadMore v-if="(showNumber < maxNumber)" @click="showMore()">LOAD MORE</AppLoadMore>
      </template>
    </ActivitiesExplorer>
</template>
