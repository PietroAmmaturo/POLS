<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="box">
        <slot></slot>
    </div>
  </div>
</template>

<style scoped>

.container {
  width: 100%;
}
.box {
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
  gap: 0.1em;
  justify-content: space-around;
}
</style>