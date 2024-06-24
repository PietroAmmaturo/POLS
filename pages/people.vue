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
useSeoMeta({
  title: "MEDUSA - Our Team",
  description: "The people who work with us to make the MEDUSA Center a reality"
})
</script>

<template>
  <ActivitiesHeader title="People" subtitle="Meet our dedicated team of professionals who are committed to supporting and empowering survivors of domestic violence. Our staff includes counselors, legal advocates, social workers, and volunteers, all working together to provide compassionate and comprehensive care. Together, we strive to make a positive impact and foster a safe, supportive community.">
  </ActivitiesHeader>
  <div class="content">
    <ActivitiesExplorer @filter-selected="updateGender" :filters="genders" :initial-filter="selectedGender" @order-selected="updateOrder" :orders="orders">
      <template  #showcase>
        <div class="people">
          <transition-group v-if="people.length" name="bounce-fade" appear>
            <PersonCard v-for="(person) in people" type="person" :key="person.name" :name="person.name" :picture="person.picture" :id="person.id">
            </PersonCard>
          </transition-group>
          <AppLoader v-else-if="peopleFound"></AppLoader>
          <p v-else>There are no people with the selected tag.</p>
        </div>
      </template>
    </ActivitiesExplorer>
  </div>
</template>

<style>
.content{
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
}
.people{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 60px;
}
</style>
