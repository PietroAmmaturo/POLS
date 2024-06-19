<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
<div class="footer">
  <div class="footer_left">
    <span>Women Center Ltd</span>
    <span>55 Trinity Ave SW, Atlanta<br>United States</span>
    <span>EIN: 19-2837465</span>
  </div>
  <div class="footer_right">
    <div class="brand"><font-awesome-icon icon="fa-brands fa-instagram" size="xl" style="color: #FF0AC8; margin: 3px; width: 24px;" /><span>@WomenCenter</span></div>
    <div class="brand"><font-awesome-icon icon="fa-brands fa-twitter" size="xl" style="color: #74C0FC; margin: 3px;" /><span>@WomenCenter</span></div>
    <div class="brand"><font-awesome-icon icon="fa-brands fa-facebook" size="xl" style="color: #004678; margin: 3px;" /><span>@WomenCenter</span></div>
  </div>
</div>
</template>

<style scoped>
  .footer{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: var(--light);
    color: var(--white);
    margin-top: 50px;
/*    position: absolute;
    bottom: 0;*/
    width: 100%;
    height: 170px;
  }
  .footer_left, .footer_right{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 0 30px 0;
    gap: 10px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .brand {
    display: flex;
    align-items: center;
  }
</style>