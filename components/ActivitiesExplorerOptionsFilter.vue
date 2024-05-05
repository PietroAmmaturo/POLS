<script setup lang="ts">

const string = "Choose filter";
const selectedFilter = ref(string);
</script>

<template>
  <select v-model="selectedFilter" @change="$emit('filterSelected', selectedFilter)">
    <option disabled selected>{{string}}</option>
    <option v-for="filter in filters" :key="filter" :value="filter">{{ filter }}</option>
  </select>
</template>

<script lang="ts">
export default {

  props: ['filters']
}

</script>

<style scoped>
select {
  color: black;
  display: block;
  margin: auto;
}
</style>