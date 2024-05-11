<script setup lang="ts">

const string = "Order by";
const selectedOrder = ref(string);
</script>

<template>
  <select v-model="selectedOrder" @change="$emit('orderSelected', selectedOrder)">
    <option disabled selected>{{string}}</option>
    <option v-for="filter in orders" :key="filter" :value="filter">{{ filter }}</option>
  </select>
</template>

<script lang="ts">
export default {

  props: ['orders']
}

</script>

<style scoped>
select {
  color: black;
  display: block;
  margin: auto;
  font-family: 'Montserrat';
  width: auto;
  height: auto;
  padding: 5px;
  border: 2px solid black;
  border-radius: 12px;
  font-size: 20px;
}
</style>