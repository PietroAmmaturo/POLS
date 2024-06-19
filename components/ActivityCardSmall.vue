<script setup lang="ts">

</script>

<template>

  <nuxt-link class="activity-card-small" :to="`/${type}/${id}`">
    <div class="picture" :style="{ backgroundImage: `url(${picture})` }"></div>
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
  /*transform: translateY(-2px);*/
  /*box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);*/
  background: var(--accent);
}

.activity-card-small .picture {
  position: relative;
  width: 100%;
  height: 125px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
}

.activity-card-small h4 {
  position: relative;
  text-align: center;
}
</style>

<script lang="ts">
export default {
  props: ['name', 'picture', 'type', 'id']
}
</script>