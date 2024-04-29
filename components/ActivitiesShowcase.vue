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
  width: 100vw;
}
.box {
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  padding: 50px;
}
</style>