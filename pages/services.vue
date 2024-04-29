<script setup lang="ts">
    import { useServiceStore } from '~/stores/services';
    const store = useServiceStore()
    const services = store.services
</script>

<template>
    <Navbar></Navbar>
    <ActivitiesHeader title="Services" subtitle="Our services are ..." background="https://ckrrgcxccboxnwjognhr.supabase.co/storage/v1/object/sign/POLS/default.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQT0xTL2RlZmF1bHQuanBnIiwiaWF0IjoxNzE0MzI0NTAyLCJleHAiOjI1NzgzMjQ1MDJ9.xqrecMdpXUDVKoI4dlCvS3EdoGWEK2ntAJY48mPYwYg&t=2024-04-28T17%3A15%3A02.994Z">
    </ActivitiesHeader>
    <ActivitiesShowcase>
        <ActivityCard v-for="(service, index) in services" :key="index" :name="service.name" :picture="service.picture" :type="'service'" :id="service.id"></ActivityCard>
    </ActivitiesShowcase>
</template>

<style scoped>
.navbar{
    text-align: center;
    top: 0;
    width: 100%;
    background-color: bisque;
    position: fixed;
}
body {
    width: 100vw;
    padding: 0;
    margin: 0;
}
</style>