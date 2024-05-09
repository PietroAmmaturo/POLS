<script setup lang="ts">
import { useProjectStore } from '~/stores/projects';

const store = useProjectStore()
const projects = store.projects
</script>

<script>

</script>
<template>
  <ActivitiesHeader title="Projects" subtitle="Our projects are ...">
  </ActivitiesHeader>
  <ActivitiesShowcase>
      <ActivityCard v-for="(project, index) in projects" :key="index" :name="project.name" :picture="project.picture" :type="'project'" :id="project.id">
      </ActivityCard>
  </ActivitiesShowcase>
</template>

