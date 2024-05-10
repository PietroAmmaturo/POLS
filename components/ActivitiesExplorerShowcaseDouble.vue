<script setup lang="ts">
import ActivitiesBanner from "~/components/ActivitiesBanner.vue";
</script>


<template>
  <div class="columns">
    <div class="column">
      <ActivitiesBanner class="banner" align="right" path="/projects" title="PROJECTS" subtitle="Click here for an overview of our initiatives and accomplishments. Dive into a curated selection of our PROJECTS spanning various domains. Click to explore further in the all projects section."></ActivitiesBanner>
      <slot name="projects"></slot>
    </div>
    <div></div>
    <div class="column color">
      <ActivitiesBanner class="banner"  align="left" path="/services" title="SERVICES" subtitle="Click here for an overview of our initiatives and accomplishments. Dive into a curated selection of our SERVICES spanning various domains. Click to explore further in the all projects section."></ActivitiesBanner>
      <slot name="services"></slot>
    </div>
  </div>
</template>

<style scoped>
.banner {
  width: 100% !important;
}
.columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
}
.column {
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 50%;
  display: flex;
  flex-wrap: wrap;
}
</style>