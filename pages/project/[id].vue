<script setup lang="ts">
import ActivityTags from "~/components/ActivityTags.vue";

import { useProjectStore } from '~/stores/projects';
import { usePersonStore } from "~/stores/people";
import ActivityResponsible from "~/components/ActivityResponsible.vue";
import ActivitiesBanner from "~/components/ActivitiesBanner.vue";


definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
  }
})
const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 300);
});

const route = useRoute();
const projectStore = useProjectStore();
const personStore = usePersonStore();
const id = parseInt(route.params.id as string);
const project = projectStore.getProjectById(id);
const person = computed(() => project.value ? personStore.getPersonByProject(project.value) : undefined);
</script>

<template>
  <div v-if="project" >
    <Breadcrumb :current-page="project.name" current-alias="Project"></Breadcrumb>
    <ActivityHeader :title="project.name" :subtitle="project.description" :picture="project.picture" >
    </ActivityHeader>
    <section>
      <ActivitiesBanner align="center" path="/projects" title="PROJECTS" ></ActivitiesBanner>
    </section>
    <ActivityResponsible :name="person?.value?.name" :description="person?.value?.description" :picture="person?.value?.picture" type="person" :id="person?.value?.id">
    </ActivityResponsible>
    <section>
      <ActivityTags :tags="project.tags"></ActivityTags>
    </section>
  </div>
  <div v-else class="placeholder">
    <p><h2>Project not found.</h2></p>
  </div>
</template>

<script lang="ts">
export default {
  loading: {
    color: 'blue',
    height: '5px'
  }
}
</script>
<style scoped>
  .placeholder {
    margin: auto;
    width: fit-content;
    height: calc(100% - 300px);
  }
  .placeholder > p {
    margin-top: 20;
  }
</style>