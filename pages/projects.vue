<script setup lang="ts">
import { useProjectStore } from '~/stores/projects';
import Navbar from "~/components/navbar.vue";
const store = useProjectStore()
const projects = store.projects
</script>

<template>
  <Navbar></Navbar>
  <ActivitiesHeader title="Projects" subtitle="Our projects are ..." background="https://ckrrgcxccboxnwjognhr.supabase.co/storage/v1/object/sign/POLS/default.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQT0xTL2RlZmF1bHQuanBnIiwiaWF0IjoxNzE0MzI0NTAyLCJleHAiOjI1NzgzMjQ1MDJ9.xqrecMdpXUDVKoI4dlCvS3EdoGWEK2ntAJY48mPYwYg&t=2024-04-28T17%3A15%3A02.994Z">
  </ActivitiesHeader>
  <ActivitiesShowcase>
      <ActivityCard v-for="(project, index) in projects" :key="index" :name="project.name" :picture="project.picture" :type="'project'" :id="project.id">
      </ActivityCard>
  </ActivitiesShowcase>
</template>

<style scoped>
</style>