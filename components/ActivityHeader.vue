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
      <NuxtImg id="pic" :src="picture" alt="Activity Image" />
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
#pic {
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
  @media screen and (max-width: 950px){
    font-size: 8vw;
  }
}
header h2{
  margin: 0;
  color: var(--light);
  filter: drop-shadow(2px 0 var(--white))
  drop-shadow(-1px 0 var(--white))
  drop-shadow(0 2px var(--white))
  drop-shadow(0 -1px var(--white));
}
</style>