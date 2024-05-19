<script setup lang="ts">

</script>

<template>

  <nuxt-link class="activity-card-small" :to="`/${type}/${id}`">
    <div class="picture"><img :src="picture" alt="cover" /></div>
    <h5 class="title">{{name}}</h5>
  </nuxt-link>
</template>

<style scoped>

.activity-card-small {
  max-width: 50vw;
  background-color: #D9D9D9;
  width: 200px;
  height: auto;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  margin-block: 0.5em;
  padding: 1em;
}

.activity-card-small:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.activity-card-small .picture {
  width: 100%;
  height: auto;
}
.activity-card-small .picture img {
  width: 100%;
  height: 125px;
  position: relative;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.activity-card-small .picture::after {
  content: "";
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 1px 1px #D9D9D9;
}

.activity-card-small h5 {
  position: relative;
  text-align: center;
}
</style>

<script lang="ts">
export default {
  props: ['name', 'picture', 'type', 'id']
}
</script>