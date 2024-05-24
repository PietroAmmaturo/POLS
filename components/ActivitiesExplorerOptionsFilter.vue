<script setup lang="ts">

const props = defineProps(['filters', 'initialFilter']);

const defaultFilter =  "Category";
const selectedFilter = ref(props.initialFilter ? props.initialFilter : defaultFilter);
</script>

<template>
  <select v-model="selectedFilter" @change="$emit('filterSelected', selectedFilter)">
    <option disabled selected>{{defaultFilter}}</option>
    <option v-for="filter in filters" :key="filter" :value="filter">{{ filter }}</option>
  </select>
</template>

<style scoped>
select {
  color: var(--light);
  display: block;
  margin: auto;
  font-family: 'Montserrat';
  width: 190px;
  height: auto;
  padding: 5px;
  border: 2px solid var(--light);
  border-radius: 12px;
  font-size: 20px;
}
select:after{
  color: var(--light);
}
select:focus{
  outline: none;
}
</style>