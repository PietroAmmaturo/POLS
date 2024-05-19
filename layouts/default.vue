<script setup lang="ts">

import Footer from "~/components/Footer.vue";
import NavigationBar from "~/components/NavigationBar.vue";
</script>

<template>
  <NavigationBar></NavigationBar>
  <slot></slot>
  <Footer></Footer>
</template>

<style scoped>

</style>