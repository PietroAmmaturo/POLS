<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>


<template>
    <NuxtLink class="column" to="/services">
      <div>
        <h2>Services</h2>
        <p>Brief description of your services</p>
      </div>
      <font-awesome-icon class="icon" icon="bell-concierge" />
    </NuxtLink>
</template>

<style scoped>

.icon {
  font-size: 8em;
  z-index: 1;
}
.column {
  position: relative;
  flex: 1 1 0; /* Ensures equal width on all screens */
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, black , #D9D9D9 5px);
  padding: 2em;
  flex-wrap: wrap;
  transition: color 0.25s linear;
}
.column::before {
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  content: "";
  background-image: linear-gradient(to right, black , #D9D9D9);
  opacity: 0;
  transition: opacity 0.25s linear;
}
.column:hover::before {
  opacity: 1;
  z-index: 0;
}
.column:hover {
  color: white;
}
h2 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

p {
  font-size: 0.9rem;
  line-height: 1.5;
}
div {
  width: min-content;
  min-width: 50%;
  z-index: 1;
}
</style>