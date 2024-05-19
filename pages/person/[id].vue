<script setup lang="ts">

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

const projectsFound = ref(true);
const servicesFound = ref(true);
const selectedTag = route.query.tag ? ref(route.query.tag as string) : ref("");

</script>

<template>
  <div v-if="person" >
    <Breadcrumb :current-page="person.name" current-alias="Person"></Breadcrumb>
    <ActivityHeader :title="person.name" :subtitle="person.description" :picture="person.picture" >
    </ActivityHeader>
    <section>
      <ActivitiesBanner class="banner" align="right" :path="'/projects?tag='+selectedTag" title="PROJECTS"></ActivitiesBanner>
          <ActivitiesExplorerShowcase>
            <transition-group v-if="projects.length" name="bounce-fade" appear>
              <ActivityCardSmall v-for="(activity) in projects" :key="activity.id" :name="activity.name" :picture="activity.picture"
                            type="project" :id="activity.id">
              </ActivityCardSmall>
            </transition-group>
            <AppLoader v-else-if="projectsFound"></AppLoader>
            <p v-else>There are no projects with the selected tag.</p>
          </ActivitiesExplorerShowcase>
    </section>
    <section>
      <ActivitiesBanner class="banner"  align="left" :path="'/services?tag='+selectedTag" title="SERVICES"></ActivitiesBanner>
      <ActivitiesExplorerShowcase>
        <transition-group v-if="services.length" name="bounce-fade" appear>
          <ActivityCardSmall v-for="(activity) in services" :key="activity.id" :name="activity.name" :picture="activity.picture"
                        type="service" :id="activity.id">
          </ActivityCardSmall>
        </transition-group>
        <AppLoader v-else-if="servicesFound"></AppLoader>
        <p v-else>There are no services with the selected tag.</p>
      </ActivitiesExplorerShowcase>
    </section>
  </div>

</template>

<style scoped>
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%; /* Make sure the container takes the full width */
  }

  .title h2 {
    flex-grow: 1;
    text-align: center;
    background-color: #D9D9D9;
    transition: all 0.2s linear;
    padding: 0.2em;
  }
  p {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .banner {
    width: 100%;
  }
</style>