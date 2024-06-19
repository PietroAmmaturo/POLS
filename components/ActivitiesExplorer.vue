<script setup lang="ts">

const props = defineProps(['filters', 'initialFilter', 'orders', 'initialOrder']);

const defaultFilter =  "Filter";
const selectedFilter = ref(props.initialFilter ? props.initialFilter : defaultFilter);
const defaultOrder = "Order by";
const selectedOrder = ref(defaultOrder);
</script>

<template>
  <div class="options">
    <select v-model="selectedFilter" @change="$emit('filterSelected', selectedFilter)">
      <option disabled selected>{{defaultFilter}}</option>
      <option v-for="filter in filters" :key="filter" :value="filter">{{ filter }}</option>
    </select>
    <select v-model="selectedOrder" @change="$emit('orderSelected', selectedOrder)">
      <option disabled selected>{{defaultOrder}}</option>
      <option v-for="filter in orders" :key="filter" :value="filter">{{ filter }}</option>
    </select>
  </div>
  <slot name="showcase"></slot>
</template>

  <script lang="ts">
</script>


<style>
.options {
  margin: 0;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
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