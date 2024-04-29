<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>


<template>
  <section class="columns">
    <NuxtLink class="column" to="/projects">
      <font-awesome-icon class="icon" icon="puzzle-piece" />
      <div class="projects">
        <h2>Projects</h2>
        <p>Brief description of your projects</p>
      </div>
    </NuxtLink>
    <NuxtLink class="column" to="/services">
      <div>
        <h2>Services</h2>
        <p>Brief description of your services</p>
      </div>
      <font-awesome-icon class="icon" icon="bell-concierge" />
    </NuxtLink>
  </section>
</template>

<style scoped>

.projects {
  text-align: right;
}
.columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.icon {
  font-size: 8em;
}
.column {
  flex: 1 1 0; /* Ensures equal width on all screens */
  display: flex;
  justify-content: space-evenly;
  background-color: #D9D9D9;
  margin: 5px;
  padding: 2em;
  flex-wrap: wrap;
}

h2 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

p {
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>