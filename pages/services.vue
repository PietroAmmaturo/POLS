<script setup lang="ts">
    import { useServiceStore } from '~/stores/services';
    import Navbar from "~/components/NavigationBar.vue";
    const store = useServiceStore()
    const services = store.services
</script>

<template>
    <ActivitiesHeader title="Services" subtitle="Our services are ...">
    </ActivitiesHeader>
    <ActivitiesShowcase>
        <ActivityCard v-for="(service, index) in services" :key="index" :name="service.name" :picture="service.picture" :type="'service'" :id="service.id"></ActivityCard>
    </ActivitiesShowcase>
</template>
