<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {getPages} from "~/composables/breadcrumbs";

const props = defineProps(['currentPage', 'currentAlias']);

const parents = getPages(props.currentAlias);
</script>

<template>
  <div class="breadcrumb">
    <template v-for="(parent, index) in parents">
      <div v-if="index < parents.length - 2" class="parents">
        <NuxtLink v-bind:to="parent.path">{{ parent.page }}</NuxtLink>
        <font-awesome-icon class="breadcrumb-icon" icon="angles-left"/>
      </div>
      <div v-else-if="index == parents.length - 2" class="current-category">
        <NuxtLink v-bind:to="parent.path">{{ parent.page }}</NuxtLink>
        <div class="current-shape"></div>
      </div>
    </template>
  </div>
</template>

<style scoped>

.breadcrumb{
  --distance: 30px;
  --opacity: 0.4;
  font-weight: 550;
  display: flex;
  flex-direction: row;
  gap: var(--distance);
  padding: 10px 30px 10px 30px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: auto !important;
}
.breadcrumb-icon{
  font-size: 10px;
  margin-bottom: -2px;
  color: var(--light);
}
/*.home{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: var(--distance);
  opacity: var(--opacity);
}*/
.parents{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: var(--distance);
  opacity: var(--opacity);
}
.current-category{
  color: var(--accent);
  font-weight: 700;
  opacity: 1;
  display: flex;
  flex-direction: column;
  gap: 3.5px;
  align-items: center;
}
.current-shape{
  width: 65%;
  height: 5px;
  background: var(--light);
  border-radius: 15px;
  transition: width 0.4s ease;
}
.current-category:hover{
  .current-shape{
    width: 100%;
    background: var(--accent);
  }
}
</style>