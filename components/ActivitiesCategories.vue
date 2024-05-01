<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ServicesBanner from "~/components/ServicesBanner.vue";
import ProjectsBanner from "~/components/ProjectsBanner.vue";
</script>


<template>
  <div class="columns">
    <ProjectsBanner></ProjectsBanner>
    <ServicesBanner></ServicesBanner>
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