<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>

  <nuxt-link class="activity-card" :to="`/${type}/${id}`">
    <div class="picture" :style="{ backgroundImage: `url(${picture})` }"></div>
    <h3 class="title">{{name}}</h3>
    <p class="cta"><font-awesome-icon class="icon" icon="link" /> Learn more</p>
  </nuxt-link>
</template>

<style scoped>

.activity-card {
  max-width: 80vw;
  background-color: var(--white);
  width: 300px;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 30px var(--shadow);
  transition: all 300ms;
  margin-block: 2em;
  padding: 25px;
}

.activity-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px var(--shadow), 0 0 40px var(--light);
}

.activity-card .picture {
  position: relative;
  width: 100%;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.activity-card h3 {
  position: relative;
  text-align: center;
}

.cta{
  color: var(--light);
  position: relative;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}
.activity-card:hover .cta {color: var(--accent);}
</style>

<script lang="ts">
export default {
  props: ['name', 'picture', 'type', 'id']
}
</script>