<script setup lang="ts">

</script>

<template>
  <header class="header" :style="{ backgroundImage: `url(${background})` }">
      <h1>{{title}}</h1>
      <p>{{subtitle}}</p>
  </header>
</template>

<style scoped>
/* Header styles */
.header {
  width: 100vw;
  background-size: cover;
  background-position: center;
  height: 30vh;  /* Adjust height as needed */
  justify-content: center;
  align-items: center;
  color: #fff;  /* Text color for elements on top of the image */
  text-align: center;
  padding-top: 10vh;
}

h1 {
  font-size: 2em;
  margin-top: 10vh;
  padding: 0;
}

p {
  font-size: 1.2em;
  margin-top: 10px;
}
</style>

<script>
export default {
  props: ['title', 'subtitle', 'background']
}
</script>