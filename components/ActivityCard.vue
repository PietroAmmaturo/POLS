<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

</script>

<template>

  <nuxt-link class="activity-card" v-if="type === 'project'" :to="`/project/${id}`">
    <div><span>PROJECT</span><font-awesome-icon class="icon" icon="puzzle-piece" /></div>
    <div class="picture"><img :src="picture" alt="cover" /></div>
    <h3 class="title">{{name}}</h3>
  </nuxt-link>

  <nuxt-link class="activity-card" v-else-if="type === 'service'"  :to="`/service/${id}`">
    <div><span>SERVICE</span><font-awesome-icon class="icon" icon="bell-concierge" /></div>
    <div class="picture"><img :src="picture" alt="cover" /></div>
    <h3 class="title">{{name}}</h3>
  </nuxt-link>

  <nuxt-link class="activity-card" v-else  :to="`/service/${id}`">
    <div><span></span></div>
    <div class="picture"><img :src="picture" alt="cover" /></div>
    <h3 class="title">{{name}}</h3>
  </nuxt-link>
</template>

<style scoped>

.activity-card {
  max-width: 80vw;
  background-color: #D9D9D9;
  width: 350px;
  height: auto;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  margin-block: 2em;
  padding-inline: 1em;
}

.activity-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.activity-card .picture {
  width: 100%;
  height: auto;
}
.activity-card .picture img {
  width: 100%;
  height: auto;
  position: relative;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.activity-card .picture::after {
  content: "";
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 1px 1px #D9D9D9;
}

.activity-card h3 {
  position: relative;
  text-align: center;
}

.activity-card div {
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 1em;
  align-items: center;
}

.activity-card div span {
  min-height: 0.5em;
  margin: 0.25em;
}
</style>

<script lang="ts">
export default {
  props: ['name', 'picture', 'type', 'id']
}
</script>