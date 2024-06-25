<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>


<template>
  <div class="columns">
    <div class="column">
      <NuxtLink class="title" to="./projects">
        <h2><font-awesome-icon class="icon" icon="link" /> See all the Projects</h2>
      </NuxtLink>
      <slot name="projects"></slot>
    </div>
    <div class="separator"></div>
    <div class="column">
      <NuxtLink class="title" to="./services">
        <h2><font-awesome-icon class="icon" icon="link" /> See all the Services</h2>
      </NuxtLink>
      <slot name="services"></slot>
    </div>
  </div>
</template>

<style scoped>
.columns {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
}
.column {
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: calc(50% - 5px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
h2 {
  flex-grow: 1;
  text-align: center;
  background-color: var(--light);
  color: var(--white);
  transition: all 0.2s linear;
  padding: 0.2em;
  margin: 0;
}
p {
  padding-inline: 4em;
}
.separator {
  width: 4px;
  align-self: stretch;
  @media screen and (max-width: 790px){
    display: none;
  }
  background: linear-gradient(var(--light) 5%,  var(--shadow) 10%);
  border-radius: 0 0 5px 5px;
  margin: 0 0 40px 0;
}
.icon{
  font-size: 0.8em;
}
</style>