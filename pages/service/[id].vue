<script setup lang="ts">
  definePageMeta({
    validate: async (route) => {
      // Check if the id is made up of digits
      return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
    }
  })
  import { useServiceStore } from '~/stores/services';
  import { useTestimonialStore } from '~/stores/testimonials';
  import ActivityResponsible from "~/components/ActivityResponsible.vue";
  import TestimonialCard from "~/components/TestimonialCard.vue";
  import ServicesBanner from "~/components/ServicesBanner.vue";
  const id = parseInt(useRoute().params.id as string);
  var testimonials = useTestimonialStore().testimonials;
  testimonials = testimonials.filter((e) => e.referTo === id);
  const service = useServiceStore().services[id-1];
</script>

<template>
  <ActivityHeader :title="service.name" :subtitle="service.description" :picture="service.picture" >
  </ActivityHeader>
  <section>
    <ServicesBanner></ServicesBanner>
  </section>
  <div class="info">
    <h1>Practical Info</h1>
    <p>{{service.information}}</p>
  </div>
  <ActivityResponsible>
  </ActivityResponsible>
  <span>
    <h1>They say of Us...</h1>
  </span>
  <ActivitiesShowcase>
    <TestimonialCard v-for="(testimonial, index) in testimonials" :key="index" :author="testimonial.author" :text="testimonial.text"></TestimonialCard>
  </ActivitiesShowcase>
</template>

<style scoped>
.info, span {
  text-align: center;
}
</style>