<script setup lang="ts">
import ActivityTags from "~/components/ActivityTags.vue";

import { useProjectStore } from '~/stores/projects';
import { usePersonStore } from "~/stores/people";
import ActivityResponsible from "~/components/ActivityResponsible.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && !Number.isNaN(parseInt(route.params.id));
  }
})

const route = useRoute();
const projectStore = useProjectStore();
const personStore = usePersonStore();
const id = parseInt(route.params.id as string);
const project = projectStore.getProjectById(id);
const person = computed(() => project.value ? personStore.getPersonByProject(project.value) : undefined);
</script>

<template>
  <Breadcrumb current-alias="Project"></Breadcrumb>
  <div v-if="project" >
    <ActivityHeader :title="project.name" :picture="project.picture" :type="'project'" >
    </ActivityHeader>
    <div class="content">
      <div class="description">
        <h2>What does it deals with?</h2>
        <p v-if="project">{{project.description}}</p>
      </div>
      <ActivityResponsible :name="person?.value?.name" :description="person?.value?.description" :picture="person?.value?.picture" type="person" :id="person?.value?.id">
      </ActivityResponsible>
      <div class="tags">
        <h2>Do you want to see any other activity related to these categories?</h2>
        <ActivityTags :tags="project.tags"></ActivityTags>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="placeholder">
      <p class="error"><font-awesome-icon class="icon" icon="circle-exclamation"/> Project not found.</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  loading: {
    color: 'blue',
    height: '5px'
  }
}
</script>
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
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
}
p {
  margin: 10px 5vw 10px 5vw;
  text-align: justify;
}
h2{
  text-align: center;
}
.error{
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}
</style>