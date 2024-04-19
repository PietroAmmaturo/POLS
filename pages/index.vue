

<script setup lang="ts">
  import { useDogStore } from '~/stores/dogs';
  const store = useDogStore()
  const dogs = store.dogs
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
</template>

<style scoped>
#main-img {
  width: 80%;
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
