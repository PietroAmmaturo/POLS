<script setup lang="ts">
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
<div class="searchbar">
  <input id="search-bar" type="text" placeholder="Search..">
  <div class="lens" style="cursor: pointer;">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
  </div>
</div>
</template>

<style>
  .searchbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    display: block;
    width: 50%;
    height: 30px;
    padding: 16px 20px;
    border: 2px solid black;
    border-radius: 12px 0 0 12px;
    font-size: 25px;
  }
  .lens {
    display: block;
    height: 50%;
    font-size: 25px;
    padding: 16px 20px;
    border: 2px solid black;
    border-radius: 0 12px 12px 0;
  }
</style>