<script setup lang="ts">
defineEmits(['openMenu', 'closeMenu', 'openMobileMenu', 'closeMobileMenu'])
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
</script>

<template>
  <div class="navigation_bar">
    <div class="navbar_left">
      <p class="menu-button" @click="$emit('openMenu')">Activities <font-awesome-icon id="caret-down" class="icon" icon="caret-down" /><font-awesome-icon style="display: none" id="caret-up" class="icon" icon="caret-up" /></p>
      <NuxtLink to="/people"><p>People</p></NuxtLink>
    </div>
    <NuxtLink to="/"><font-awesome-icon class="icon" icon="house" id="home"/></NuxtLink>
    <div class="navbar_right">
      <NuxtLink to="/chatbot"><font-awesome-icon class="icon" icon="comments" /></NuxtLink>
      <NuxtLink to="/about"><p>About us</p></NuxtLink>
      <NuxtLink to="/contact"><p>Contact us</p></NuxtLink>
      <i class="fas fa-sun"></i>
    </div>
    <font-awesome-icon class="icon" icon="bars" id="mobile_open" @click="$emit('openMobileMenu')"/>
  </div>
  <div id="menu" class="nav-menu" style="display: none">
    <NuxtLink to="/projects" @click="$emit('closeMenu')"><font-awesome-icon class="icon" icon="arrow-right-long" /> All projects</NuxtLink>
    <NuxtLink to="/services" @click="$emit('closeMenu')"><font-awesome-icon class="icon" icon="arrow-right-long" /> All services</NuxtLink>
    <NuxtLink to="/activities" @click="$emit('closeMenu')"><font-awesome-icon class="icon" icon="arrow-right-long" /> See all activities</NuxtLink>
  </div>
  <div id="mobile-menu" style="display: none">
    <div class="nav-menu">
      <font-awesome-icon class="icon" icon="xmark" id="mobile_close" @click="$emit('closeMobileMenu')"/>
      <div id="mobile-landmarks">
        <NuxtLink to="/activities" @click="$emit('closeMobileMenu')">All activities</NuxtLink>
        <div id="mobile-subactivities">
          <NuxtLink to="/projects" @click="$emit('closeMobileMenu')">All the projects</NuxtLink>
          <NuxtLink to="/services" @click="$emit('closeMobileMenu')">All the services</NuxtLink>
        </div>
        <NuxtLink to="/people" @click="$emit('closeMobileMenu')">All people</NuxtLink>
        <NuxtLink to="/contact" @click="$emit('closeMobileMenu')">Contact us</NuxtLink>
        <NuxtLink to="/about" @click="$emit('closeMobileMenu')">About us</NuxtLink>
        <NuxtLink to="/chatbot" @click="$emit('closeMobileMenu')">Chatbot</NuxtLink>
      </div>
    </div>
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
#mobile_open{
 display: none;
}
@media screen and (max-width: 950px){
  #mobile_open{
    display: flex;
    padding: 0 25px 0 0;
    cursor: pointer;
  }
  #mobile_close{
    display: flex;
    cursor: pointer;
    margin: -20px 0 20px 0;
    padding-right: 0;
  }
  #home{
    padding: 0 0 0 25px;
  }
  .navbar_right, .navbar_left{
    display: none;
  }
  .navigation_bar{
    justify-content: space-between;
  }
  .nav-menu{
    display: flex;
    flex-direction: column;
    position: fixed;
    left: auto;
    top: 0;
    right: 0;
    background: #9e9e9e;
    z-index: 1;
    padding: 30px 20px 30px 20px;
    font-size: 24px;
    font-weight: bold;
    align-items: flex-end;
    border-radius: 0 0 0 15px;
    height: auto;
  }
  #mobile-landmarks{
    display: flex;
    flex-direction: column;
    padding: 30px 20px 30px 20px;
    gap: 40px;
    align-items: flex-end;
  }
  #mobile-subactivities{
    font-size: 16px;
    flex-direction: column;
    display: flex;
    font-weight: normal;
    gap: 5px;
    margin-top: -40px;
  }
  #mobile-menu{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
  }
}
</style>