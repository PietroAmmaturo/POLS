<script setup lang="ts">

</script>

<template>
<section>
  <slot></slot>
</section>
</template>

<style scoped>
section {
  flex-grow: 1;
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 1em;
  gap: 0.4em;
  justify-content: space-around;
}
</style>