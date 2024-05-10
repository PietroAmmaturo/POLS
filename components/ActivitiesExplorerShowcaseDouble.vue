<script setup lang="ts">
import ActivitiesBanner from "~/components/ActivitiesBanner.vue";
</script>


<template>
  <div class="columns">
    <div class="column">
      <ActivitiesBanner class="banner" align="right" path="/projects" title="PROJECTS"></ActivitiesBanner>
      <slot name="projects"></slot>
    </div>
    <div></div>
    <div class="column color">
      <ActivitiesBanner class="banner"  align="left" path="/services" title="SERVICES"></ActivitiesBanner>
      <slot name="services"></slot>
    </div>
  </div>
</template>

<style scoped>
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