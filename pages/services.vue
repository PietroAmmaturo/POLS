<script setup lang="ts">
    import { useServiceStore } from '~/stores/services';
    import SearchBar from '~/components/SearchBar.vue';
    const store = useServiceStore()
    const services = store.services
</script>

<template>
    <ActivitiesHeader title="Services" subtitle="Our services are ...">
    </ActivitiesHeader>
    <div class="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <SearchBar></SearchBar>
    <ActivitiesShowcase>
        <ActivityCard v-for="(service, index) in services" :key="index" :name="service.name" :picture="service.picture" :type="'service'" :id="service.id"></ActivityCard>
    </ActivitiesShowcase>
</template>

<style scoped>
    .description {
        margin-top: 5%;
        margin-bottom: 5%;
        text-align: center;
    }
</style>