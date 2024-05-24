<script setup lang="ts">
defineProps(['title', 'picture', 'type']);
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <header>
    <div>
      <div class="title">
        <h1>{{title}}</h1>
        <h2 v-if="type == 'project'"><font-awesome-icon class="icon" icon="hand-holding-heart" /> One of our projects</h2>
        <h2 v-if="type == 'service'"><font-awesome-icon class="icon" icon="hand-holding-heart" /> One of our services</h2>
      </div>
      <img :src="picture" alt="cover" />
    </div>
  </header>
</template>

<style scoped>
/* Header styles */
header {
  position: relative;
  width: 100%;
  color: var(--black);
  margin: 0;
}

header div {
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--shadow);
  z-index: 1;
}
header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.title{
  position: absolute;
  z-index: 2;

}
header h1 {
  text-align: center;
  margin: 0;
  color: var(--white);
  filter: drop-shadow(var(--accent) 0 0 10px);
  font-size: 5vw;
}
header h2{
  margin: 0;
  color: var(--light);
  filter: drop-shadow(var(--black) 0 0 10px);
}
</style>