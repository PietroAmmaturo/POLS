<script setup lang="ts">
</script>

<template>
  <div class="load-more">
    <div class="load-button">
      <p>LOAD MORE</p>
    </div>
  </div>
</template>

<style scoped>
.load-more {
  width: 100%;
  display: flex;
  pointer-events: none;
  margin-bottom: 100px;
}
.load-button {
  margin-inline: auto;
  padding: 1em;
  border-radius: 5px;
  background: var(--light);
  color: var(--white);
  pointer-events: all;
  cursor: pointer;
}
.load-button:hover{
  background: var(--accent);
}
</style>