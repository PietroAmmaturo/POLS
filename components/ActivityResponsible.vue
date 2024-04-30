Code snippet
<script setup lang="ts">
//TODO: add the logic to connect to the person db
</script>

<template>
  <section>
    <h1>Who is the responsible?</h1>
    <div class="responsible-content">
      <img class="responsible-image" src="https://via.placeholder.com/300" alt="Placeholder image" />
      <div class="responsible-info">
        <h2>Name Surname</h2>
        <p>Brief descriptive phrase</p>
        <span>Know more</span>
      </div>
    </div>
  </section>
</template>

<style scoped>

.responsible-content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}
.responsible-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
}

.responsible-info {
  width: 40%;
  margin: 40px;
}

h1 {
  margin-bottom: 10px;
  font-size: 2em;
  text-align: center;
}

h2 {
  margin-bottom: 5px;
  font-size: 1.5em;
}

p {
  margin-bottom: 10px;
  font-size: 0.9rem;
}

span {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #ddd;
  cursor: pointer;
}

span:hover {
  background-color: #ccc;
}
</style>