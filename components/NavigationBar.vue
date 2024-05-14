<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
onMounted(() => window.addEventListener("resize", onResize, true));
onMounted(() => window.addEventListener("click", (e) => closeDropDown(e), true));
function onResize() {
  closeMobileMenu(true);
  closeMenu();
}
function closeDropDown (event: MouseEvent) {
  const dropdown_button = document.getElementById("dropdown_button");
  const dropdown_menu = document.getElementById("menu");
  if(dropdown_menu && dropdown_button){
    const targetNode = event.target as Node;
    if(!dropdown_menu.contains(targetNode) && !dropdown_button.contains(targetNode))
      closeMenu();
  }
}
function openMenu(){
  const menu = document.getElementById("menu");
  let caretdown = document.getElementById("caret-down");
  let caretup = document.getElementById("caret-up");
  if(menu != null && caretdown != null && caretup != null){
    if(menu.style.display == "none"){
      menu.style.display = "flex";
      caretdown.style.display = "none";
      caretup.style.display = "inline";
    }else{
      closeMenu();
    }
  }
}
function closeMenu(){
  const menu = document.getElementById("menu");
  let caretdown = document.getElementById("caret-down");
  let caretup = document.getElementById("caret-up");
  if(menu != null && caretdown != null && caretup != null){
    menu.style.display = "none";
    caretdown.style.display = "inline";
    caretup.style.display = "none";
  }
}

function openMobileMenu(){
  const menu = document.getElementById("mobile-menu");
  if(menu != null){
    menu.classList.remove("menu-closed");
    setTimeout(() => {menu.classList.add("menu-open")}, 0);
    menu.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeMobileMenu(resize: boolean){
  const menu = document.getElementById("mobile-menu");
  if(menu != null){
    menu.classList.remove("menu-open");
    setTimeout(() => {menu.classList.add("menu-closed")}, 0);
    if(resize)
      menu.style.display = "none";
    else
      setTimeout(() => {menu.style.display = "none"}, 500);
    document.body.style.overflow = "scroll";
  }
}
</script>

<template>
  <div class="navigation_bar">
    <div class="navbar_left">
      <div></div>
      <p class="menu-button" id="dropdown_button" @click="openMenu">Activities <font-awesome-icon id="caret-down" class="icon" icon="caret-down" /><font-awesome-icon style="display: none" id="caret-up" class="icon" icon="caret-up" /></p>
      <NuxtLink to="/people"><p>People</p></NuxtLink>
    </div>
    <NuxtLink to="/" id="home"><font-awesome-icon class="icon" icon="house"/></NuxtLink>
    <div class="navbar_right">
      <NuxtLink to="/chatbot"><font-awesome-icon class="icon" icon="comments" /></NuxtLink>
      <NuxtLink to="/about"><p>About us</p></NuxtLink>
      <NuxtLink to="/contact"><p>Contact us</p></NuxtLink>
      <i class="fas fa-sun"></i>
    </div>
    <font-awesome-icon class="icon" icon="bars" id="mobile_open" @click="openMobileMenu"/>
  </div>
  <div id="menu" class="nav-menu" style="display: none">
    <NuxtLink id="overview" to="/activities" @click="closeMenu"><font-awesome-icon class="icon-sub" icon="chevron-right" /> Overview</NuxtLink>
    <div class="subactivities">
      <NuxtLink to="/projects"  @click="closeMenu"><font-awesome-icon class="icon-sub" icon="chevron-right" /> All the projects</NuxtLink>
      <NuxtLink to="/services"  @click="closeMenu"><font-awesome-icon class="icon-sub" icon="chevron-right" /> All the services</NuxtLink>
    </div>
  </div>
  <div id="mobile-menu" class="nav-menu" style="display: none">
    <div id="container_close">
      <font-awesome-icon class="icon" icon="xmark" id="mobile_close" @click="closeMobileMenu(false)"/>
    </div>
    <div id="mobile-landmarks">
      <NuxtLink to="/activities" @click="closeMobileMenu(false)"><font-awesome-icon class="icon" icon="hand-holding-heart" /> All activities</NuxtLink>
      <div id="mobile-subactivities">
        <NuxtLink to="/projects" @click="closeMobileMenu(false)"><font-awesome-icon class="icon-sub" icon="chevron-right" /> All the projects</NuxtLink>
        <NuxtLink to="/services" @click="closeMobileMenu(false)"><font-awesome-icon class="icon-sub" icon="chevron-right" /> All the services</NuxtLink>
      </div>
      <NuxtLink to="/people" @click="closeMobileMenu(false)"><font-awesome-icon class="icon" icon="users" /> All people</NuxtLink>
      <NuxtLink to="/contact" @click="closeMobileMenu(false)"><font-awesome-icon class="icon" icon="headphones-simple" /> Contact us</NuxtLink>
      <NuxtLink to="/about" @click="closeMobileMenu(false)"><font-awesome-icon class="icon" icon="pen-to-square" /> About us</NuxtLink>
      <NuxtLink to="/chatbot" @click="closeMobileMenu(false)"><font-awesome-icon class="icon" icon="comments" /> Chatbot</NuxtLink>
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
  justify-content: space-between;
  background: #D9D9D9;
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 10;
}
.navbar_left{
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  justify-content: left;
}
.navbar_right{
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
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
  z-index: 10;
  padding: 20px 20px 20px 20px;
  font-size: 16px;
  font-weight: 600;
  gap: 10px;
  border-radius: 0 0 15px 15px;
  align-items: flex-start;
}
.subactivities{
  flex-direction: column;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
  margin-left: 10px;
}
#overview{
  font-size: 18px;
  font-weight: 800;
}
.icon-sub{
  font-size: 10px;
  margin-bottom: 1px;
}
#mobile_open{
 display: none;
}
@media screen and (max-width: 950px){
  #mobile_open{
    display: flex;
    margin: 0 25px 0 0;
    cursor: pointer;
  }
  #mobile_close{
    display: flex;
    cursor: pointer;
    margin: 20px 25px 0 0;
    font-size: 24px;
  }
  #container_close{
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    width: 100%;
  }
  #home{
    margin: 0 0 0 25px;
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
    left: 0;
    top: 0;
    right: 0;
    background: #9e9e9e;
    z-index: 20;
    padding: 0;
    font-size: 32px;
    font-weight: bold;
    align-items: center;
    border-radius: 0 0 1px 1px;
    height: 0;
    width: auto;
    transition: height 0.5s ease;
    overflow: hidden;
  }
  #mobile-landmarks{
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
    height: 80%;
    justify-content: center;
  }
  #mobile-subactivities{
    font-size: 24px;
    flex-direction: column;
    display: flex;
    font-weight: 600;
    gap: 5px;
    margin-top: -40px;
    align-items: flex-end;
    width: 100%;
  }
  .icon-sub{
    font-size: 16px;
  }
  .menu-open{
    height: 100%;
  }
  .menu-closed{
    height: 0;
  }
}
</style>