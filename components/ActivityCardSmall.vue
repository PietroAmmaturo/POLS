<script setup lang="ts">

const props = defineProps(['name', 'picture', 'type', 'id'])

const img = useImage()
const imgUrl = img(`/${props.type}.jpg`, { quality: 10, blur: 40 })
</script>

<template>

  <nuxt-link class="activity-card-small" :to="`/${type}/${id}`">
    <div class="picture">
      <NuxtImg class="image" :src="picture" :placeholder="imgUrl" loading="lazy" alt="Link to Activity Page"></NuxtImg>
    </div>
    <h4 class="title">{{name}}</h4>
  </nuxt-link>
</template>

<style scoped>

.activity-card-small {
  max-width: 50vw;
  background-color: var(--light);
  color: var(--white);
  width: 200px;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  margin-block: 0.5em;
  padding: 1em;
}

.activity-card-small:hover {
  box-shadow: 0 5px 15px var(--accent)!important;
  transform: translateY(-5px);
  /*background: var(--accent);*/
}


.activity-card-small .picture {
  display: flex;
  position: relative;
  width: 100%;
  height: 125px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.activity-card-small h4 {
  position: relative;
  text-align: center;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>