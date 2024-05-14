<script setup lang="ts">
const props = defineProps(['tags']);

</script>

<template>
  <div class="container">
    <transition-group name="bounce-fade" appear>
    <NuxtLink v-for="tag in tags" :to="'/activities?tag=' + tag" class="tag backgroundColor">{{ tag }}</NuxtLink>
    </transition-group>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.tag {
  margin: 1em;
  padding: 1em;
  border-radius: 5px;
}
</style>