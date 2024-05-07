<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useBreadcrumbStore} from "~/stores/breadcrumbs";

defineProps(['parents', 'currentPage']);

const breadcrumbStore = useBreadcrumbStore();
const parents = breadcrumbStore.breadcrumbs;
const history = breadcrumbStore.history;

function openHistory() {
  const el = document.querySelector(".breadcrumb");
  if (el) {
    el.classList.add("expanded");
  }
}
function closeHistory() {
  const el = document.querySelector(".breadcrumb");
  if (el) el.classList.remove("expanded");
}
</script>

<template>
  <div class="breadcrumb">
    <template v-for="(parent, index) in parents">
      <div v-if="index !== parents.length - 1" class="parents">
        <NuxtLink v-bind:to="parent.path">{{ parent.page }}</NuxtLink>
        <font-awesome-icon class="breadcrumb-icon" icon="angles-right"/>
      </div>
      <div v-else class="current-page">
        {{ currentPage }}
        <div class="current-shape"></div>
      </div>
    </template>
      <font-awesome-icon @click="openHistory" class="open-icon" icon="plus"/>
      <font-awesome-icon @click="closeHistory" class="close-icon" icon="minus"/>
        <template v-for="(item, index) in history">
          <div class="parents history">
            <NuxtLink v-bind:to="item.path">{{ item.page }}</NuxtLink>
            <font-awesome-icon class="breadcrumb-icon" icon="angles-right"/>
          </div>
        </template>
  </div>
</template>

<style scoped>

.breadcrumb .history {
  display: none;
}
.breadcrumb.expanded .history {
  display: inherit;
}
.breadcrumb .open-icon{
  display: inline-block;
  font-size: 20px;
  color: var(--color);
  opacity: var(--opacity);
}
.breadcrumb.expanded .open-icon{
  display: none;
}
.breadcrumb .close-icon{
  display: none;
}
.breadcrumb.expanded .close-icon{
  display: inline-block;
  font-size: 20px;
  color: var(--color);
  opacity: var(--opacity);}
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