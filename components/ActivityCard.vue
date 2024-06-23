<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps(['name', 'picture', 'type', 'id'])

const img = useImage()
const imgUrl = img(`/${props.type}.jpg`, { quality: 10, blur: 40 })
</script>

<template>
  <NuxtLink class="person-card" :to="`/${type}/${id}`">
    <div class="picture">
      <NuxtImg class="image" :src="picture" :placeholder="imgUrl" loading="lazy" alt="Link to Activity Page"></NuxtImg>
    </div>
    <h3 class="title">{{name}}</h3>
    <p class="cta"><font-awesome-icon class="icon" icon="link" /> Learn more</p>
  </NuxtLink>
</template>

<style scoped>

.person-card {
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

.person-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px var(--shadow), 0 0 40px var(--light);
}

.person-card .picture {
  display: flex;
  position: relative;
  width: 100%;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.person-card h3 {
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
.person-card:hover .cta {color: var(--accent);}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  width: min-content;
  height: min-content;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script lang="ts">
</script>