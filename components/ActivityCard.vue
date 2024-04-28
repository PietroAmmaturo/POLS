<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
      <div class="activity-card">
        <font-awesome-icon class="icon" v-if="type === 'project'" icon="puzzle-piece" />
        <font-awesome-icon class="icon" v-else-if="type === 'service'" icon="'bell-concierge" />
        <div class="content">
      <p class="title">{{name}}</p>
    </div>
    <img :src="picture" alt="article-cover" />
  </div>
</template>

<style scoped>

.activity-card {
  color: white;
  width: 350px;
  height: 220px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  margin: 10px;
}

.activity-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.activity-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.activity-card .content {
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  padding: 30px 20px 20px 20px;
  height: auto;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
}

.article-card .title {
  margin: 0;
  font-size: 17px;
  color: #fff;
}

.activity-card .icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2em;
}
</style>

<script lang="ts">
export default {
  props: ['name', 'picture', 'type']
}
</script>