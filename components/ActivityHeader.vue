<script setup lang="ts">

</script>

<template>
  <header>
    <div>
      <h1>{{title}}</h1>
      <img :src="picture" alt="cover" />
    </div>
    <section>
      <p>{{subtitle}}</p>
    </section>
  </header>
</template>

<style scoped>
/* Header styles */
header {
  position: relative;
  width: 100%;
  color: black;
  margin: 0;
}

header div {
  width: 100%;
  height: 50vh;
}
header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

header h1 {
  font-size: 2em;
  padding: 1em;
  text-align: center;
  margin: 0;
  box-sizing: border-box;
  width: fit-content;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  height: 4em;
  bottom: 0;
  background: linear-gradient(transparent, rgba(255, 255, 255, 0.6));
}

p {
  margin: auto;
  margin-top: 1em;
  font-size: 1.2em;
  text-align: center;
}
</style>

<script>
export default {
  props: ['title', 'subtitle', 'picture']
}
</script>