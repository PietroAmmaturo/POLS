<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
defineProps(['parents', 'currentPage']);
</script>

<template>
  <div class="breadcrumb">
    <div class="home">
      <NuxtLink to="/">Home</NuxtLink>
      <font-awesome-icon class="breadcrumb-icon" icon="angles-right"/>
    </div>
    <div class="parents" v-for="parent in parents">
      <NuxtLink v-bind:to="parent.path">{{ parent.page }}</NuxtLink>
      <font-awesome-icon class="breadcrumb-icon" icon="angles-right"/>
    </div>
    <div class="current-page">
      {{ currentPage }}
      <div class="current-shape"></div>
    </div>
  </div>
</template>

<style scoped>
.breadcrumb{
  --distance: 15px;
  --opacity: 0.4;
  --color: #9e0048;
  font-size: 16px;
  font-weight: 550;
  display: flex;
  flex-direction: row;
  gap: var(--distance);
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: auto !important;
}
.breadcrumb-icon{
  font-size: 10px;
  margin-bottom: -2px;
  color: var(--color);
}
.home{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: var(--distance);
  opacity: var(--opacity);
}
.parents{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: var(--distance);
  opacity: var(--opacity);
}
.current-page{
  color: var(--color);
  font-weight: 700;
  opacity: 1;
  display: flex;
  flex-direction: column;
  gap: 3.5px;
  align-items: center;
}
.current-shape{
  width: 105%;
  height: 5px;
  background: var(--color);
  border-radius: 15px;
  transition: width 0.4s ease;
}
/*.current-page:hover{
  .current-shape{
    width: 100%;
  }
}*/
</style>