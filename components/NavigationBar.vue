<script setup lang="ts">
defineEmits(['openMenu', 'closeMenu'])
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
</script>

<template>
  <div class="navigation_bar">
    <div class="navbar_left">
      <p class="menu-button" @click="$emit('openMenu')">Activities <font-awesome-icon id="caret-down" class="icon" icon="caret-down" /><font-awesome-icon style="display: none" id="caret-up" class="icon" icon="caret-up" /></p>
      <NuxtLink to="/people"><p>People</p></NuxtLink>
    </div>
    <NuxtLink to="/"><font-awesome-icon class="icon" icon="house" /></NuxtLink>
    <div class="navbar_right">
      <NuxtLink to="/chatbot"><font-awesome-icon class="icon" icon="comments" /></NuxtLink>
      <NuxtLink to="/about"><p>About us</p></NuxtLink>
      <NuxtLink to="/contact"><p>Contact us</p></NuxtLink>
      <i class="fas fa-sun"></i>
    </div>
  </div>
  <div id="menu" class="nav-menu" style="display: none">
    <NuxtLink to="/projects" @click="$emit('closeMenu')"><font-awesome-icon class="icon" icon="arrow-right-long" /> All projects</NuxtLink>
    <NuxtLink to="/services" @click="$emit('closeMenu')"><font-awesome-icon class="icon" icon="arrow-right-long" /> All services</NuxtLink>
    <NuxtLink to="/activities" @click="$emit('closeMenu')"><font-awesome-icon class="icon" icon="arrow-right-long" /> See all activities</NuxtLink>
  </div>
</template>

<style scoped>
.navigation_bar{
  font-size: 24px;
  font-weight: bold;
  color: black;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #D9D9D9;
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 1;
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
.menu-button{
  cursor: pointer;
}
.nav-menu{
  flex-direction: column;
  position: fixed;
  left: 25px;
  top: 60px;
  background: #9e9e9e;
  z-index: 1;
  padding: 30px 20px 30px 20px;
  font-size: 16px;
  font-weight: bold;
  gap: 20px;
  border-radius: 0 0 15px 15px
}
</style>