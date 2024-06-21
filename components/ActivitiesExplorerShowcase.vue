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
  width: 80%;
  border-radius: 15px;
}
.box {
  flex-grow: 1;
  margin: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1em;
  gap: 60px;
  justify-content: space-around;
}
</style>