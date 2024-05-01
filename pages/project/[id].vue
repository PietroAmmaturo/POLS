<script setup lang="ts">
import Navbar from "~/components/navbar.vue";

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
  }
})
import { useProjectStore } from '~/stores/projects';
import ActivityResponsible from "~/components/ActivityResponsible.vue";
import ProjectsBanner from "~/components/ProjectsBanner.vue";
const route = useRoute();
const store = useProjectStore();
const id = parseInt(route.params.id as string);
const projects = store.projects; // Initialize project as null
</script>
<template>
  <div  v-for="(project, index) in projects">
    <ActivityHeader v-if="project.id === id" :title="project.name" :subtitle="project.description" :picture="project.picture" >
    </ActivityHeader>
    <section>
      <ProjectsBanner v-if="project.id === id"></ProjectsBanner>
    </section>
    <ActivityResponsible v-if="project.id === id">
    </ActivityResponsible>
  </div>

</template>

<style scoped>
</style>