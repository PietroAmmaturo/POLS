<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
  }
})
import { usePersonStore } from '~/stores/people';
import { useProjectStore } from '~/stores/projects';
import { useServiceStore } from '~/stores/services';
const route = useRoute();
const store = usePersonStore();
const projectStore = useProjectStore();
const serviceStore = useServiceStore();
const id = parseInt(route.params.id as string);
const person = store.getPersonById(id); 
const projects = projectStore.getProjectsByPerson(id)
const services = serviceStore.getServicesByPerson(id)
const img = useImage()

const projectsFound = ref(true);
onMounted(() => {
  if (projects.value && projects.value.length === 0) projectsFound.value = false;
})
watch(projects, newValue => (newValue && newValue.length === 0) ? projectsFound.value = false : null)

const servicesFound = ref(true);
onMounted(() => {
    if (services.value && services.value.length === 0) servicesFound.value = false;
})
watch(services, newValue => (newValue && newValue.length === 0) ? servicesFound.value = false : null)

const selectedTag = route.query.tag ? ref(route.query.tag as string) : ref("");

const personFound = ref(true);
onMounted(() => {
  if (!person.value) personFound.value = false;
})
useSeoMeta({
  title: "MEDUSA - Team",
  description: "One of our Collaborators for the MEDUSA Center"
})
</script>

<template>
  <Breadcrumb current-alias="Person"></Breadcrumb>
  <div v-if="person">
    <ActivitiesHeader :title="person.name">
    </ActivitiesHeader>
    <div class="content">
      <div class="information">
        <div class="picture">
          <NuxtImg class="image" :src="person.picture" alt="Person Image"></NuxtImg>
        </div>
        <p> {{person.description}} </p>
      </div>
      <div class="heading project"><h2>My projects:</h2></div>
      <div class="activities project">
        <transition-group v-if="projects.length" name="bounce-fade" appear>
          <ActivityCardSmall v-for="(activity) in projects" :key="activity.id" :name="activity.name" :picture="activity.picture"
                             type="project" :id="activity.id">
          </ActivityCardSmall>
        </transition-group>
        <AppLoader v-else-if="projectsFound"></AppLoader>
        <p v-else><font-awesome-icon class="icon" icon="face-frown" /> At the moment, I'm not in charge of any project!</p>
      </div>
      <div class="heading service" ><h2>My services:</h2></div>
      <div class="activities service">
        <transition-group v-if="services.length" name="bounce-fade" appear>
          <ActivityCardSmall v-for="(activity) in services" :key="activity.id" :name="activity.name" :picture="activity.picture"
                             type="service" :id="activity.id">
          </ActivityCardSmall>
        </transition-group>
        <AppLoader v-else-if="servicesFound"></AppLoader>
        <p v-else><font-awesome-icon class="icon" icon="face-frown" /> At the moment, I'm not in charge of any service!</p>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="placeholder">
      <p class="error"><font-awesome-icon class="icon" icon="circle-exclamation"/> Person not found.</p>
    </div>
  </div>

</template>

<style scoped>
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
  gap: 60px;
  padding-bottom: 60px;
}
.information{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 25px;
  padding: 25px;
  background: var(--light);
  color: var(--white);
  width: 100%;
  box-sizing: border-box;
}
.image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 150px;
}
.picture {
  width: 250px;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.information p{
  width: 50%;
  text-align: justify;
  white-space: pre-wrap;
  @media screen and (max-width: 950px){
    width: 90%;
  }
}
.error{
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}
h2{
  margin: 0;
  color: var(--light);
}
.heading{
  display: flex;
  border-radius: 15px;
  border: 3px solid var(--light);
  width: 300px;
  justify-content: center;
  padding: 5px;
}
.activities{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 90%;
  padding: 0 10px 0 10px;
}
.activities p{
  color: var(--accent);
  font-weight: 600;
  text-align: center;
}
</style>