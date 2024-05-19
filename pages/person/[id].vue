<script setup lang="ts">
import ActivityTags from "~/components/ActivityTags.vue";

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
  }
})
import { usePersonStore } from '~/stores/people';
import ActivityResponsible from "~/components/ActivityResponsible.vue";
import ActivitiesBanner from "~/components/ActivitiesBanner.vue";
const route = useRoute();
const store = usePersonStore();
const id = parseInt(route.params.id as string);
const person = store.getPersonById(id);
</script>

<template>
  <div v-if="person" >
    <Breadcrumb :current-page="person.name" current-alias="Person"></Breadcrumb>
    <ActivityHeader :title="person.name" :subtitle="person.description" :picture="person.picture" >
    </ActivityHeader>
    <section>
      <ActivitiesBanner align="center" path="/people" title="PEOPLE" ></ActivitiesBanner>
    </section>
    <ActivityResponsible>
    </ActivityResponsible>
    <section>
      <ActivityTags :tags="person.tags"></ActivityTags>
    </section>
  </div>

</template>

<style scoped>
</style>