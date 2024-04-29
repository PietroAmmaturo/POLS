<script setup lang="ts">
defineEmits(['openMenu'])
</script>

<template>
  <div class="navigation_bar">
    <div class="navbar_left">
      <p @click="$emit('openMenu')">Activities <span class="icon"></span></p>
      <NuxtLink to="/people"><p>People</p></NuxtLink>
    </div>
    <NuxtLink to="/"><span class="icon"></span></NuxtLink>
    <div class="navbar_right">
      <NuxtLink to="/chatbot"><span class="icon"></span></NuxtLink>
      <NuxtLink to="/about"><p>About us</p></NuxtLink>
      <NuxtLink to="/contact"><p>Contact us</p></NuxtLink>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@font-face {
  font-family: 'AwesomeFont';
  src: url(assets/fonts/fa-solid-900.ttf);
}
.icon{
  font-family: 'AwesomeFont';
}
.navigation_bar{
  font-size: 24px;
  font-weight: bold;
  font-family: 'Montserrat';
  color: black;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #D9D9D9;
  margin: 0;
}
.navbar_left{
  width: 45%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 25px;
  gap: 25px;
  justify-content: left;
}
.navbar_right{
  width: 45%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 25px 0 0;
  gap: 25px;
  justify-content: right;
}
a, a:visited, a:link, a:hover, a:active{
  text-decoration: none;
  color: inherit;
}

</style>