<script setup lang="ts">
  definePageMeta({
    validate: async (route) => {
      // Check if the id is made up of digits
      return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
    }
  });

  import { useServiceStore } from '~/stores/services';
  import { useTestimonialStore } from '~/stores/testimonials';

  import ActivityHeader from '~/components/ActivityHeader.vue';
  import ServicesBanner from "~/components/ServicesBanner.vue";
  import ActivityResponsible from "~/components/ActivityResponsible.vue";
  import ActivitiesShowcase from '~/components/ActivitiesExplorerShowcase.vue';
  import TestimonialCard from "~/components/TestimonialCard.vue";

  const route = useRoute();
  const id = parseInt(route.params.id as string);
  const store = useServiceStore();
  const service = store.getServiceById(id);
  const store2 = useTestimonialStore();
  const testimonials = store2.getTestimonialsByServiceId(id);
  const parents = ref([
    { page: 'All the activities', path: '/activities' },
    { page: 'All the services', path: '/services'}
  ]);
  const currentPage = service.value != undefined ? service.value.name : null;
</script>

<template>
  <Breadcrumb :parents="parents" :current-page="currentPage"></Breadcrumb>
      <ActivityHeader v-if="service" :title="service.name" :subtitle="service.description" :picture="service.picture">
      </ActivityHeader>
      <section>
        <ServicesBanner>
        </ServicesBanner>
      </section>
      <section class="info">
        <h1>Practical Info</h1>
        <p v-if="service">{{service.information}}</p>
      </section>
      <ActivityResponsible>
      </ActivityResponsible>
      <span>
        <h1>They say of Us...</h1>
      </span>
      <ActivitiesShowcase>
        <TestimonialCard v-for="(testimonial, index) in testimonials" :key="index" :author="testimonial.author" :text="testimonial.text">
        </TestimonialCard>
      </ActivitiesShowcase>
</template>

<style scoped>
  .info, span {
    text-align: center;
  }
</style>