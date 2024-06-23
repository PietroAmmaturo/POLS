<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>


<template>
    <div class="column">
      <NuxtLink class="title" :to="path">
        <h2><font-awesome-icon class="icon" icon="link" /> {{title}}</h2>
      </NuxtLink>
    </div>
</template>

<style scoped>

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.column {
  margin-bottom: 60px;
  margin-top: 60px;
}
h2 {
  flex-grow: 1;
  text-align: center;
  background-color: var(--light);
  color: var(--white);
  transition: all 0.2s linear;
  padding: 0.2em;
  margin: 0;
  /*@media screen and (min-width: 764px){
    position: fixed;
    width: 50%;
    z-index: 10;
  }*/
}
p {
  padding-inline: 4em;
}
</style>

<script lang="ts">
export default {
  props: ['title', 'path', 'align']
}
</script>