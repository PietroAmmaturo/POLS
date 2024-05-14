<script setup lang="ts">

import ActivityTags from "~/components/ActivityTags.vue";
import {useServiceStore} from '~/stores/services';
import {useTestimonialStore} from '~/stores/testimonials';

import ActivityHeader from '~/components/ActivityHeader.vue';
import ActivityResponsible from "~/components/ActivityResponsible.vue";
import ActivitiesShowcase from '~/components/ActivitiesExplorerShowcase.vue';
import TestimonialCard from "~/components/TestimonialCard.vue";
import ActivitiesBanner from "~/components/ActivitiesBanner.vue";

definePageMeta({
    validate: async (route) => {
      // Check if the id is made up of digits
      return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
    }
  });

const route = useRoute();
  const id = parseInt(route.params.id as string);
  const store = useServiceStore();
  const service = store.getServiceById(id);
  const store2 = useTestimonialStore();
  const testimonials = store2.getTestimonialsByServiceId(id);
</script>

<template>
  <div v-if="service">
    <Breadcrumb :current-page="service.name" current-alias="Service"></Breadcrumb>
    <ActivityHeader :title="service.name" :subtitle="service.description" :picture="service.picture">
      </ActivityHeader>
      <section>
        <ActivitiesBanner align="left" path="/services" title="SERVICES"></ActivitiesBanner>
      </section>
      <section class="info">
        <h2>Practical Info</h2>
        <p v-if="service">{{service.information}}</p>
      </section>
      <ActivityResponsible>
      </ActivityResponsible>
      <span>
        <h2>They say of Us...</h2>
      </span>
      <ActivitiesShowcase>
        <TestimonialCard v-for="(testimonial, index) in testimonials" :key="index" :author="testimonial.author" :text="testimonial.text">
        </TestimonialCard>
      </ActivitiesShowcase>
    <section>
      <ActivityTags :tags="service.tags"></ActivityTags>
    </section>
  </div>
</template>

<style scoped>
  .info, span {
    text-align: center;
  }
</style>