<script setup lang="ts">
import Navbar from "~/components/NavigationBar.vue";

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
  }
})
import { useServiceStore } from '~/stores/services';
import { useTestimonialStore } from '~/stores/testimonials';
import ActivityResponsible from "~/components/ActivityResponsible.vue";
const route = useRoute();
const store = useServiceStore();
const store2 = useTestimonialStore();
const id = parseInt(route.params.id as string);
const services = store.services; // Initialize project as null
var testimonials = store2.testimonials;
testimonials = testimonials.filter((e) => e.referTo === id);
</script>

<template>
  <div v-for="(service, index) in services">
    <ActivityHeader v-if="service.id === id" :title="service.name" :subtitle="service.description" :picture="service.picture" >
    </ActivityHeader>
    <div class="info" v-if="service.id === id">
      <h1>Practical Info</h1>
      <p>{{service.information}}</p>
    </div>
    <ActivityResponsible v-if="service.id === id">
    </ActivityResponsible>
  </div>
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