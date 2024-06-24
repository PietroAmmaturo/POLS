<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps(['name', 'picture', 'type', 'id'])

const img = useImage()
const imgUrl = img(`/${props.type}.jpg`, { quality: 10, blur: 40 })
</script>

<template>
  <div class="person-card">
    <div class="picture">
      <NuxtLink :to="`/${type}/${id}`"><NuxtImg class="image" :src="picture" :placeholder="imgUrl" loading="lazy" alt="Link to Person Page"></NuxtImg></NuxtLink>
    </div>
    <NuxtLink :to="`/${type}/${id}`"><h3 class="title">{{name}}</h3></NuxtLink>
  </div>
</template>

<style scoped>

.person-card {
  max-width: 80vw;
  width: 300px;
  height: auto;
  border-radius: 100px;
  overflow: hidden;
  position: relative;
  /*box-shadow: 0 0 30px var(--shadow);*/
  transition: all 300ms;
  margin-block: 2em;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.person-card:hover {
  transform: translateY(-10px);
  background: var(--light);
  /*box-shadow: 0 0 20px var(--shadow), 0 0 40px var(--light);*/
}

.person-card .picture {
  display: flex;
  position: relative;
  width: 250px;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.person-card h3 {
  position: relative;
  text-align: center;
  color: var(--light);
}
.person-card:hover h3 {color: var(--white);}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 150px;
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