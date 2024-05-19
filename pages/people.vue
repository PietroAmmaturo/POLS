<script setup lang="ts">
import {usePeopleStore} from '~/stores/people';
definePageMeta({
  validate: async (route) => {
    return (!route.query.tag || typeof route.query.tag === 'string');
  }
})
const store = usePeopleStore();

const people = store.getPeople();

const currentPage = "All the people";


const peopleFound = ref(true);
onMounted(() => {
  if (people.value && people.value.length === 0) peopleFound.value = false;
})
watch(people, newValue => (newValue && newValue.length === 0) ? peopleFound.value = false : null)
</script>

<template>
  <Breadcrumb :current-page="currentPage" :current-alias="currentPage"></Breadcrumb>
  <ActivitiesHeader title="Person" subtitle="Our people are ...">
  </ActivitiesHeader>
  <ActivitiesExplorer>
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
