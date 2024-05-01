<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

</script>

<template>

  <div class="testimonial-card">
    <font-awesome-icon class="star" icon="fa-solid fa-star" />
    <font-awesome-icon class="comment" icon="fa-solid fa-comment" />
      <div class="content">
        <p class="author">{{author}}</p>
        <p class="text">{{text}}</p>
      </div>
  </div>

</template>

<style scoped>

.testimonial-card {
  color: rgb(255, 150, 150);
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

.testimonial-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.testimonial-card .content {
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  padding: 30px 20px 20px 20px;
  height: auto;
  bottom: 0;
  background: linear-gradient(transparent, rgb(255, 150, 150));
}

.testimonial-card .author {
  margin: 0;
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  color: black;
}

.testimonial-card .text {
  color: black;
}

.testimonial-card .comment {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2em;
  color: black;
}

.testimonial-card .star {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 2em;
  color: yellow;
}
</style>

<script lang="ts">
export default {
  props: ['author', 'text', 'referTo']
}
</script>