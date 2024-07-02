<script setup lang="ts">
</script>

<template>
  <AppNavigationBar></AppNavigationBar>
  <div class="wrapper">
    <slot/>
  </div>
  <AppFooter></AppFooter>
</template>

<style scoped>
.wrapper{
  min-height: calc(100vh - 210px - 60px);
}
</style>
