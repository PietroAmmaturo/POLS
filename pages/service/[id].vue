<script setup lang="ts">

import ActivityTags from "~/components/ActivityTags.vue";
import {useServiceStore} from '~/stores/services';
import {useTestimonialStore} from '~/stores/testimonials';

import ActivityHeader from '~/components/ActivityHeader.vue';
import ActivityResponsible from "~/components/ActivityResponsible.vue";
import TestimonialCard from "~/components/TestimonialCard.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

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
useSeoMeta({
  title: "MEDUSA - Services",
  description: "One of our Services for the MEDUSA Center"
})
</script>

<template>
  <AppBreadcrumb current-alias="Service"></AppBreadcrumb>
  <div v-if="service">
    <ActivityHeader :title="service.name" :picture="service.picture" :type="'service'">
      </ActivityHeader>
    <AppStructuralLinker family-page="service"></AppStructuralLinker>
    <div class="content">
      <div id="description" class="description">
        <h2>What does it deal with?</h2>
        <p v-if="service">{{service.description}}</p>
      </div>
      <div id="practical" class="practical_info">
        <h2>Practical Info</h2>
        <p v-if="service"><strong>Availability: </strong>{{service.information.substring(0, service.information.indexOf("@"))}}</p>
        <p v-if="service"><strong>Schedule: </strong>{{service.information.substring(service.information.indexOf("@")+1, service.information.indexOf("#"))}}</p>
        <p v-if="service"><strong>Registration: </strong>{{service.information.substring(service.information.indexOf("#")+1)}}</p>
      </div>
      <ActivityResponsible :name="person?.value?.name" :description="person?.value?.description" :picture="person?.value?.picture" type="person" :id="person?.value?.id">
      </ActivityResponsible>
      <div id="testimonials" class="testimonials">
        <h2>What they say of us?</h2>
        <div class="testimonials-showcase">
          <TestimonialCard v-for="(testimonial, index) in testimonials" :key="index" :author="testimonial.author" :text="testimonial.text">
          </TestimonialCard>
        </div>
      </div>
      <div class="tags">
        <h2>See other activities related to these categories:</h2>
        <ActivityTags :tags="service.tags"></ActivityTags>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="placeholder">
      <p class="error"><font-awesome-icon class="icon" icon="circle-exclamation"/> Service not found.</p>
    </div>
  </div>
</template>

<style scoped>
  span {
    text-align: center;
  }
  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .content{
    display: flex;
    margin-top: 60px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 100px;
  }
  p {
    margin: 10px 5vw 10px 5vw;
    text-align: justify;
  }
  h2{
    text-align: center;
  }
  .testimonials{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .testimonials-showcase{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  .error{
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
  .practical_info{
    background: var(--light);
    color: white;
    padding-bottom: 20px;
    width: 100%;
  }
  strong{
    color: var(--white) !important;
  }
</style>