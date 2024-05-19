<script setup lang="ts">
</script>


<template>
    <div class="column">
      <NuxtLink class="title" :to="path">
        <h2>{{title}}</h2>
      </NuxtLink>
    </div>
</template>

<style scoped>

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
h2 {
  flex-grow: 1;
  text-align: center;
  background-color: #D9D9D9;
  transition: all 0.2s linear;
  padding: 0.2em;
}
p {
  padding-inline: 4em;
}
</style>

<script>
export default {
  props: ['title', 'path', 'align']
}
</script>