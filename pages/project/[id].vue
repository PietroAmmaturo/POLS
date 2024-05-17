<script setup lang="ts">
import ActivityTags from "~/components/ActivityTags.vue";

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
  }
})
import { useProjectStore } from '~/stores/projects';
import ActivityResponsible from "~/components/ActivityResponsible.vue";
import ActivitiesBanner from "~/components/ActivitiesBanner.vue";
const route = useRoute();
const store = useProjectStore();
const id = parseInt(route.params.id as string);
const project = store.getProjectById(id);

</script>

<template>
  <div v-if="project" >
    <Breadcrumb :current-page="project.name" current-alias="Project"></Breadcrumb>
    <ActivityHeader :title="project.name" :subtitle="project.description" :picture="project.picture" >
    </ActivityHeader>
    <section>
      <ActivitiesBanner align="center" path="/projects" title="PROJECTS" ></ActivitiesBanner>
    </section>
    <ActivityResponsible>
    </ActivityResponsible>
    <section>
      <ActivityTags :tags="project.tags"></ActivityTags>
    </section>
  </div>
  <div v-else>
    <span>
      <h2>No Project Found</h2>
    </span>
  </div>

</template>

<style scoped>
  span {
    text-align: center;
  }
</style>