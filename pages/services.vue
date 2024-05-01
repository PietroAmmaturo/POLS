<script setup lang="ts">
    import { useServiceStore } from '~/stores/services';
    import Navbar from "~/components/NavigationBar.vue";
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
    <div class="searchbar">
        <input type="text" placeholder="Search..">
    </div>
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
    .searchbar {
        margin-bottom: 5%;
    }
    input {
        width: 50%;
        height: 50%;
        margin: auto;
        display: block;
        padding: 16px 20px;
        border: 2px solid black;
        border-radius: 12px;
        font-size: 25px;
    }
</style>