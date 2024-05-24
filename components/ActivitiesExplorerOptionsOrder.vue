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