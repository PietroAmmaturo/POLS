<script setup lang="ts">
const props = defineProps(['tags']);

</script>

<template>
  <div class="container">
    <transition-group name="bounce-fade" appear>
    <NuxtLink v-for="tag in tags" :to="'/activities?tag=' + tag" class="tag">{{ tag }}</NuxtLink>
    </transition-group>
  </div>
</template>

<style scoped>
.container {
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
.tag {
  margin: 1em;
  padding: 1em;
  border-radius: 5px;
  background: var(--light);
  color: var(--white);
}
.tag:hover{
  background: var(--accent);
}
</style>