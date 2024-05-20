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

const route = useRoute();
const projectStore = useProjectStore();
const personStore = usePersonStore();
const id = parseInt(route.params.id as string);
const project = projectStore.getProjectById(id);
const person = computed(() => project.value ? personStore.getPersonByProject(project.value) : undefined);

const projectFound = ref(true);
onMounted(() => {
  if (!project.value) projectFound.value = false;
})
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
    <AppLoader v-if="projectFound"></AppLoader>
    <p v-else>Project not found.</p>
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
  }
</style>