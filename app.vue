<template>
  <NuxtLayout>
    <NavigationBar @open-menu="openMenu()" @close-menu="closeMenu()" @open-mobile-menu="openMobileMenu()" @close-mobile-menu="closeMobileMenu()"></NavigationBar>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script setup lang="ts">
import NavigationBar from "~/components/NavigationBar.vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faPuzzlePiece, faBellConcierge, faComments } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faPuzzlePiece, faBellConcierge, faComments)
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
    menu.style.display = "flex";
  }
}

function closeMobileMenu(){
  const menu = document.getElementById("mobile-menu");
  if(menu != null){
    menu.style.display = "none";
  }
}
</script>
