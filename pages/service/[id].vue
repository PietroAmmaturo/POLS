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
  const serviceStore = useServiceStore();
  const service = serviceStore.getServiceById(id);
  const testimonialStore = useTestimonialStore();
  const testimonials = testimonialStore.getTestimonialsByServiceId(id);
  const personStore = usePersonStore();
  const person = computed(() => service.value ? personStore.getPersonByService(service.value) : undefined);

const serviceFound = ref(true);
onMounted(() => {
  if (!service.value) serviceFound.value = false;
})
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
      <ActivityResponsible :name="person?.value?.name" :description="person?.value?.description" :picture="person?.value?.picture" type="person" :id="person?.value?.id">
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
  <div v-else class="placeholder">
    <AppLoader v-if="serviceFound"></AppLoader>
    <p v-else>Service ot found.</p>
  </div>
</template>

<style scoped>
  .info, span {
    text-align: center;
  }
  .placeholder {
    margin: auto;
    width: fit-content;
  }
</style>