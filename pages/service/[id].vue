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
  import ActivitiesShowcase from '~/components/ActivitiesShowcase.vue';
  import TestimonialCard from "~/components/TestimonialCard.vue";

  const route = useRoute();
  const id = parseInt(route.params.id as string);
  const store = useServiceStore();
  const services = store.services;
  const store2 = useTestimonialStore();
  const testimonials = store2.testimonials;
</script>

<template>
  <div v-for="(service, index) in services">
    <div v-if="service.id === id">
      <ActivityHeader :title="service.name" :subtitle="service.description" :picture="service.picture">
      </ActivityHeader>
      <section>
        <ServicesBanner>
        </ServicesBanner>
      </section>
      <section class="info">
        <h1>Practical Info</h1>
        <p>{{service.information}}</p>
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
    </div>
  </div>
</template>

<style scoped>
  .info, span {
    text-align: center;
  }
</style>