<script setup lang="ts">
</script>


<template>
  <div class="columns">
    <div class="column">
      <slot name="projects"></slot>
    </div>
    <div></div>
    <div class="column color">
      <slot name="services"></slot>
    </div>
  </div>
</template>

<style scoped>
.columns {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
}
.column {
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>