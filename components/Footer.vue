<script setup lang="ts">

</script>

<template>
<div class="footer">
  <div class="footer_left">
    <span>Lorem ipsum</span>
    <span>Lorem ipsum</span>
    <span>Lorem ipsum</span>
  </div>
  <div class="footer_right">
    <span>Lorem ipsum</span>
    <span>Lorem ipsum</span>
    <span>Lorem ipsum</span>
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