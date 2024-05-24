<script setup lang="ts">

</script>

<template>
<div>
  <slot></slot>
</div>
</template>

<style scoped>
div {
  margin: 0;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>