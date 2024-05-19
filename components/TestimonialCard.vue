<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

</script>

<template>

  <div id="testimonial-card" class="testimonial-card">
    <div class="icons">
      <font-awesome-icon class="star" icon="fa-solid fa-star" />
      <font-awesome-icon class="comment" icon="fa-solid fa-comment" />
    </div>
    <div class="content">
      <div class="author">
        <p>{{author}}</p>
      </div>
      <div class ="text">
        <p>{{text}}</p>
      </div>
      <div class="over">
        <font-awesome-icon class="caret-down" icon="caret-down" />
      </div>
    </div> 
  </div>

</template>

<style scoped>

.testimonial-card {
  background: linear-gradient(transparent, rgb(255, 150, 150));
  width: 350px;
  height: 220px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  margin: 10px;
}

.testimonial-card:hover, .testimonial-card:active {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  height: auto;
  min-height: 220px;
}

.testimonial-card .icons {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
}

.testimonial-card .content {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
}

.testimonial-card .author {
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  color: black;
  text-align: center;
  position: relative;
  height: 20%;
  margin: 5px 12px 5px 12px;
}

.author > p {
  margin: 0;
  height: 100%;
}

.testimonial-card .text {
  color: black;
  position: relative;
  overflow: hidden;
  text-align: center;
  height: 80%;
  margin: 0px 12px 5px 12px;
}

.text > p {
  margin: 0;
  height: 100%;
}

.testimonial-card .over {
  text-align: center;
  margin: auto auto 5px auto;
}

.caret-down {
  height: 25px;
}

.testimonial-card:hover > .content >.over, .testimonial-card:active > .content >.over {
  transform: rotate(180deg);
}

.testimonial-card .comment {
  position: relative;
  font-size: 2em;
  color: black;
  margin: 7px;
}

.testimonial-card .star {
  position: relative;
  font-size: 2em;
  color: yellow;
  margin: 7px;
}
</style>

<script lang="ts">
export default {
  props: ['author', 'text', 'referTo']
}
</script>