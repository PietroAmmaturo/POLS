<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
defineProps(['name', 'description', 'picture', 'type', 'id']);
</script>

<template>
  <section>
    <h2>Who is the responsible?</h2>
    <div class="responsible-content">
      <img class="responsible-image" :src="picture ? picture : 'https://via.placeholder.com/200'" alt="Placeholder image" />
      <div class="responsible-info">
        <h3>{{name ? name : "No person responsible"}}</h3>
        <p>{{description ? description : "No description available"}}</p>
        <NuxtLink :to="`/${type}/${id}`"><span><font-awesome-icon class="icon" icon="clipboard-user" /> Know me better!</span></NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
section{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 0 auto;
}
.responsible-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  min-width: auto;
  border-radius: 30px;
  background-color: var(--white);
  box-shadow: 0 0 30px var(--shadow);
  padding: 20px;
  margin-top: 20px;
  gap: 30px;
}
.responsible-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100px;
}

.responsible-info {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

h2 {
  text-align: center;
}

h3{
  margin: 0;
}

p {
  margin-bottom: 10px;
}

span {
  padding: 5px 10px;
  border-radius: 10px;
  background-color: var(--light);
  cursor: pointer;
  color: white;
  font-weight: 500;
  width: fit-content;
}

span:hover {
  background-color: var(--accent);
}
</style>