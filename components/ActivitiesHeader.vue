<script setup lang="ts">

</script>

<template>
  <header>
      <h1>{{title}}</h1>
      <p>{{subtitle}}</p>
  </header>
</template>

<style scoped>
/* Header styles */
header {
  width: 100%;
  justify-content: left;
  color: black;
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
}

h1 {
  font-size: 4em;
  margin: auto;
  margin-top: 0.5em;
}

p {
  font-size: 1.2em;
  margin: auto;
  margin-top: 0.5em;
}
</style>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>