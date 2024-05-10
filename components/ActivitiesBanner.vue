<script setup lang="ts">
</script>


<template>
    <div class="column">
      <NuxtLink class="title" :to="path">
        <h2>{{title}}</h2>
      </NuxtLink>
        <p :style="'text-align:' + align">{{subtitle}}</p>
    </div>
</template>

<style scoped>

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.column {
}
h2 {
  flex-grow: 1;
  text-align: center;
  font-size: 1.5em;
  background-color: #D9D9D9;
  transition: all 0.2s linear;
  padding-inline: 1em;
  padding-block: 0.2em;
}
p {
  font-size: 1em;
  line-height: 1.5;
  padding-inline: 4em;
}
</style>

<script>
export default {
  props: ['title', 'subtitle', 'path', 'align']
}
</script>