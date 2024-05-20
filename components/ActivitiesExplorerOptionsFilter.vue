<script setup lang="ts">

const props = defineProps(['filters', 'initialFilter']);

const defaultFilter =  "Filter by";
const selectedFilter = ref(props.initialFilter ? props.initialFilter : defaultFilter);
</script>

<template>
  <select v-model="selectedFilter" @change="$emit('filterSelected', selectedFilter)">
    <option disabled selected>{{defaultFilter}}</option>
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
  font-family: 'Montserrat';
  width: 190px;
  height: auto;
  padding: 5px;
  border: 2px solid black;
  border-radius: 12px;
  font-size: 20px;
}
</style>