Code snippet
<script setup lang="ts">
//TODO: add the logic to connect to the person db
</script>

<template>
  <section>
    <h2>Who is the responsible?</h2>
    <div class="responsible-content">
      <img class="responsible-image" src="https://via.placeholder.com/200" alt="Placeholder image" />
      <div class="responsible-info">
        <h3>Name Surname</h3>
        <p>Brief descriptive or motivational phrase about me</p>
        <span>Know more</span>
      </div>
    </div>
  </section>
</template>

<style scoped>

.responsible-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}
.responsible-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.responsible-info {
  width: fit-content;
  margin: 40px;
}

h2 {
  text-align: center;
}

p {
  margin-bottom: 10px;
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