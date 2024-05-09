<script setup lang="ts">
  import { useServiceStore } from '~/stores/services';

  import ActivitiesHeader from '~/components/ActivitiesHeader.vue';
  import SearchBar from '~/components/SearchBar.vue';
  import ActivitiesShowcase from '~/components/ActivitiesShowcase.vue';
  import ActivityCard from '~/components/ActivityCard.vue';

  const store = useServiceStore();
  const services = store.services;
</script>

<template>
  <ActivitiesHeader title="Services" subtitle="Our services are ...">
  </ActivitiesHeader>
  <section class="description">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </section>
  <SearchBar>
  </SearchBar>
  <ActivitiesShowcase>
    <ActivityCard v-for="(service, index) in services" :key="index" :name="service.name" :picture="service.picture" :type="'service'" :id="service.id">
    </ActivityCard>
  </ActivitiesShowcase>
</template>

<style scoped>
  .description {
    margin-top: 5%;
    margin-bottom: 5%;
    text-align: center;
  }
</style>