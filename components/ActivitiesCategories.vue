<script setup lang="ts">
import ActivitiesBanner from "~/components/ActivitiesBanner.vue";
</script>


<template>
  <div class="columns">
    <ActivitiesBanner align="right" path="/projects" title="PROJECTS" subtitle="Click here for an overview of our initiatives and accomplishments. Dive into a curated selection of our PROJECTS spanning various domains. Click to explore further in the all projects section."></ActivitiesBanner>
    <ActivitiesBanner align="left" path="/services" title="SERVICES" subtitle="Click here for an overview of our initiatives and accomplishments. Dive into a curated selection of our SERVICES spanning various domains. Click to explore further in the all projects section."></ActivitiesBanner>
  </div>
</template>

<style scoped>
.columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin-block: 2em;
}
</style>