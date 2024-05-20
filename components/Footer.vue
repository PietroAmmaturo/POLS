<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
<div class="footer">
  <div class="footer_left">
    <span>Women Center Ltd</span>
    <span>55 Trinity Ave SW, Atlanta, United States</span>
    <span>EIN: 19-2837465</span>
  </div>
  <div class="footer_right">
    <span><font-awesome-icon icon="fa-brands fa-instagram" size="2xl" style="color: #ff0ac8;" />   @WomenCenter</span>
    <span><font-awesome-icon icon="fa-brands fa-twitter" size="2xl" style="color: #74C0FC;" />   @WomenCenter</span>
    <span><font-awesome-icon icon="fa-brands fa-facebook" size="2xl" style="color: #004678;" />   @WomenCenter</span>
  </div>
</div>
</template>

<style scoped>
  .footer{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: #D9D9D9;
    margin-top: 50px;
  }
  .footer_left, .footer_right{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 0 30px 0;
    gap: 10px;
  }
</style>