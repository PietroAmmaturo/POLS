<script setup lang="ts">

import Footer from "~/components/Footer.vue";
import NavigationBar from "~/components/NavigationBar.vue";
</script>

<template>
  <NavigationBar></NavigationBar>
  <div class="wrapper">
    <slot/>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.wrapper{
  min-height: calc(100% - 200px - 50px - 60px);
}
</style>