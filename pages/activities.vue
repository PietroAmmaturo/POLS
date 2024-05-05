<script setup lang="ts">
import { useProjectStore } from '~/stores/projects';
import Navbar from "~/components/NavigationBar.vue";
const projectStore = useProjectStore()
const projects = projectStore.projects
import { useServiceStore } from '~/stores/services';
const serviceStore = useServiceStore()
const services = serviceStore.services
</script>

<template>
  <ActivitiesHeader title="Activities" subtitle="Our actvities are ...">
  </ActivitiesHeader>
  <ActivitiesCategories></ActivitiesCategories>
  <ActivitiesExplorerShowcase>
    <transition-group name="bounce-fade" appear>
  <ActivityCard v-for="(project, index) in projects" :key="index" :name="project.name" :picture="project.picture" :type="'project'" :id="project.id">
      </ActivityCard>
      <ActivityCard v-for="(service, index) in services" :key="index" :name="service.name" :picture="service.picture" :type="'service'" :id="service.id">
      </ActivityCard>
  </transition-group>
  </ActivitiesExplorerShowcase>
</template>
