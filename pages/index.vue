<script setup lang="ts">
import {useDogStore} from '~/stores/dogs';
import {useBreadcrumbStore} from "~/stores/breadcrumbs";

const store = useDogStore()
  const dogs = store.dogs

const breadcrumbStore = useBreadcrumbStore();
const currentPage = "Home";
const currentPath = "/";
breadcrumbStore.updateBreadcrumbs(currentPage, currentPath);
</script>

<template>
  <img id = "main-img" src = "~/assets/img/home-image.jpg" />
  <h2>
    This is a description for the Dog's Hotel. The best place where dogs can rest.
  </h2>
  <div>
    <h1>Dogs</h1>
    <ul>
      <li v-for="(dog, index) in dogs" :key="index">
        {{ dog.name }} - {{ dog.breed }}
      </li>
    </ul>
  </div>
  <NuxtLink to="/services">Go to All Services</NuxtLink><br>
  <NuxtLink to="/projects">Go to All Projects</NuxtLink><br>
  <NuxtLink to="/contact">Contact Us</NuxtLink>
</template>

<style scoped>
#main-img {
  width: 35%;
  max-width: 1000px;
  height: auto;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
