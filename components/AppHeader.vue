<script setup lang="ts">
defineProps(['title', 'subtitle']);
import {html} from "ultrahtml";
</script>

<template>
  <header>
      <h1>{{title}}</h1>
      <p v-if="subtitle" v-html="subtitle"></p>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 60px;
}

h1 {
  margin: 0;
  width: auto;
  text-align: center;
}

p {
  width: 50%;
  text-align: justify;
  white-space: pre-wrap;
}
@media screen and (max-width: 950px){
  p{
    width: 75%;
  }
}
</style>