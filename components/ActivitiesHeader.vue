<script setup lang="ts">

</script>

<template>
  <header>
      <h1>{{title}}</h1>
      <p>{{subtitle}}</p>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 60px;
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

<script>
export default {
  props: ['title', 'subtitle']
}
</script>