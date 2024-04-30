<script setup lang="ts">
import Navbar from "~/components/navbar.vue";

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
  }
})
import { useServiceStore } from '~/stores/services';
const route = useRoute();
const store = useServiceStore();
const id = parseInt(route.params.id as string);
const services = store.services; // Initialize project as null
</script>
<template>
  <div  v-for="(service, index) in services">
    <ActivityHeader v-if="service.id === id" :title="service.name" :subtitle="service.description" :picture="service.picture" >
    </ActivityHeader>
  </div>

</template>

<style scoped>
</style>