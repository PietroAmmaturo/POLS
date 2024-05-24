<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
defineProps(['author', 'text', 'referTo']);
</script>

<template>

  <div id="testimonial-card" class="testimonial-card">
    <div class="head">
      <div class="author">
        <p><span class="author_name">{{author}}</span>  said...</p>
      </div>
      <font-awesome-icon class="icon" icon="quote-right" />
    </div>
    <p class="text">{{text}}</p>
  </div>

</template>

<style scoped>

.testimonial-card {
  width: 450px;
  height: fit-content;
  border-radius: 15px;
  border: var(--light) 3px solid;
  padding: 30px;
  margin: 0 5vw 0 5vw;
}
.testimonial-card:hover{
  border: var(--accent) 3px solid;
  .author_name{
    color: var(--accent);
  }
  .icon{
    color: var(--accent);
  }
}

.head {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.author {
  font-size: 22px;
  font-style: italic;
}
.author_name{
  font-style: normal;
  font-weight: 600;
  color: var(--light);
}
.text{
  font-size: 16px;
  padding-left: 15px;
  padding-top: 15px;
  text-align: justify;
}
.icon{
  font-size: 30px;
  color: var(--light);
}
</style>