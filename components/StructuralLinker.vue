<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {getSections} from "~/composables/structure";
function Menu(){
  const icon_cont = document.querySelector(".menu-icon");
  const plus_icon = document.querySelector(".plus-icon");
  const minus_icon = document.querySelector(".minus-icon");
  const list = document.querySelector(".menu-list");
  if( icon_cont && plus_icon && minus_icon && list){
    icon_cont.classList.toggle("closed");
    icon_cont.classList.toggle("opened");
    plus_icon.classList.toggle("hidden");
    minus_icon.classList.toggle("hidden");
    list.classList.toggle("hidden");
  }
}
const props = defineProps(['familyPage']);
const structures = getSections(props.familyPage);
</script>

<template>
  <div class="strct" v-if="structures">
    <div class="menu-icon closed">
      <font-awesome-icon class="plus-icon" icon="plus" @click="Menu" />
      <font-awesome-icon class="minus-icon hidden" icon="minus" @click="Menu"/></div>
    <div class="menu-list hidden">
      <p>Go to: </p>
      <transition-group v-for="structure in structures">
        <a :href="structure.id">{{structure.title}}</a>
      </transition-group>
    </div>
  </div>
</template>

<style scoped>
.strct{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 15px;
  padding: 15px;
}
.menu-list{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 15px;
  flex-wrap: wrap;
  color: var(--light);
  font-weight: 500;
  a{
    font-weight: 700;
    text-decoration: underline 2px;
  }
  a:hover{
    color: var(--accent);
  }
}
.menu-icon{
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  height: 20px;
  border-radius: 5px;
  cursor: pointer;
}
.closed{
  background: var(--light);
  color: var(--white);
  border: 2px solid transparent;
  margin-bottom: 3px;
}
.opened{
  background: var(--white);
  color: var(--light);
  border: 2px solid var(--light);
  margin-bottom: 3px;
}
.hidden{
  display: none;
}
</style>