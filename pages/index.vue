<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import { useProjectStore } from '~/stores/projects';
import { useServiceStore } from '~/stores/services';
const projectStore = useProjectStore();
const serviceStore = useServiceStore();
const projects = projectStore.getRandomProjects();
const services = serviceStore.getRandomServices();
useSeoMeta({
  title: "MEDUSA Center",
  description: "A Center to support Women in difficulty and victims of violence"
})
</script>

<template>
  <div class="content">
    <div class="header">
      <NuxtLink to="/"><div class="image"><NuxtImg class="pic" src="/logo.png" alt="logo" /></div></NuxtLink>
      <div class="title">
        <NuxtLink to="/"><h1>MEDUSA</h1></NuxtLink>
        <h2>The women's Center.<br>Empowering Strength, Inspiring Change.</h2>
        <div class="center-buttons">
          <NuxtLink to="/people"><div class="button"><p>KNOW THE STAFF</p></div></NuxtLink>
          <NuxtLink to="/about"><div class="button"><p>OUR STORY</p></div></NuxtLink>
        </div>
      </div>
    </div>
    <div class="help">
      <h1>Do you<br>need help?</h1>
      <div class="options">
        <NuxtLink to="/contact"><div class="option"><p><font-awesome-icon class="icon" icon="phone"/> Contact us</p></div></NuxtLink>
        <p>or</p>
        <NuxtLink to="/chatbot"><div class="option"><p><font-awesome-icon class="icon" icon="comments"/> Chat with the bot</p></div></NuxtLink>
      </div>
    </div>
    <div class="showcase">
      <NuxtLink to="/activities"><h1><font-awesome-icon class="icon" icon="link" /> Discover all our activities!</h1></NuxtLink>
      <div class="box">
        <div class="activity project">
          <div class="subtitle">
            <h2>Projects</h2>
            <h3>Long-term empowerment and self-sufficiency.</h3>
          </div>
          <div class="show">
            <transition-group v-if="projects.length">
              <ActivityCardSmall v-for="(activity) in projects" :key="activity.id" :name="activity.name" :picture="activity.picture" type="project" :id="activity.id"  class="variant"></ActivityCardSmall>
            </transition-group>
          </div>
          <NuxtLink to="/projects"><div class="button xl"><p>SEE MORE</p></div></NuxtLink>
        </div>
        <div class="divider"></div>
        <div class="activity service">
          <div class="subtitle">
            <h2>Services</h2>
            <h3>Addressing immediate needs and offering critical support.</h3>
          </div>
          <div class="show">
            <transition-group v-if="services.length">
              <ActivityCardSmall v-for="(activity) in services" :key="activity.id" :name="activity.name" :picture="activity.picture" type="service" :id="activity.id"  class="variant"></ActivityCardSmall>
            </transition-group>
          </div>
          <NuxtLink to="/services"><div class="button xl"><p>SEE MORE</p></div></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 0;
  background: url("/pattern.png") repeat;
}
.image{
  height: 100%;
  background-size: cover;
  @media screen and (max-width: 500px){
    display: none;
  }
}
.pic{
  max-width: 300px;
  width: 100%;
  object-fit: contain;
  @media screen and (max-width: 500px){
    max-width: 50px;
    object-fit: contain;
  }
}
.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: var(--light);
  color: white;
  padding: 30px;
  width: calc(100% - 60px);
  border-bottom: 7px solid var(--accent);
  h1{
    font-size: 10em;
    margin: 0;
    line-height: 0.7em;
    @media screen and (max-width: 950px){
      font-size: 4em;
    }
  }
  h2{
    margin: 0 0 0 10px;
    font-size: 2em;
    @media screen and (max-width: 950px){
      font-size: 1em;
    }
  }
}
.title{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 25px;
}
.center-buttons{
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.help{
  position: relative;
  padding: 50px;
  border-radius: 35px 35px 35px 0;
  border: 3px solid var(--light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background: white;
  h1{
    color: var(--accent);
    text-align: center;
    margin: 0;
    font-family: 'Caprasimo';
    font-weight: 500;
  }
  @media screen and (max-width: 950px){
    width: calc(70% - 50px);
    font-size: 0.7em;
    gap: 25px;
    padding: 25px 25px 35px 25px;
  }
}
.options{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-weight: bold;
  color: var(--light);
  p{
    font-size: 1.2em;
  }
  @media screen and (max-width: 950px){
    font-size: 0.9em;
    width: 95%;
  }
}
.option{
  background: white;
  border-radius: 30px;
  border: 3px solid var(--light);
  padding: 5px 25px 5px 25px;
}
.option:hover{
  background: var(--accent);
  color: white;
  border: 3px solid var(--accent);
}
.help::before{
  content: "";
  position: absolute;
  z-index: 0;
  left: -22px;
  bottom: 0;
  width: 0;
  height: 0;
  border-bottom: 25px solid var(--white);
  border-left: 25px solid transparent;;
  filter: drop-shadow(-3px 3px var(--light))
  drop-shadow(-3px 0px var(--light));
}
.showcase{
  background: var(--accent);
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    color: var(--white);
    text-align: center;
    margin: 5px 0 0 0;
    .icon{
      font-size: 0.7em;
    }
    @media screen and (max-width: 950px){
      font-size: 3em;
    }
  }
}
.box{
  width: 100%;
  background: var(--light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  color: white;
  padding: 25px 0 50px 0;
  margin: 15px 0 0 0;
  border-bottom: 7px solid var(--accent);
}
.activity{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
}
.project{
  text-align: left;
}
.service{
  text-align: right;
}
.subtitle{
  width: 80%;
  h2{
    font-family: 'Caprasimo';
    font-weight: 500;
    font-size: 4em;
    margin: 0;
  }
  h3{
    margin: 0;
  }
}
.show{
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  @media screen and (max-width: 930px){
    .variant:nth-child(n+3) {
      display: none;
    }
  }
  @media screen and (max-width: 650px){
    .variant:nth-child(n+2) {
      display: none;
    }
  }
}
.variant{
  background-color: var(--white)!important;
  color: var(--light)!important;
  box-shadow: 0 0 0 transparent !important;
}
.variant:hover{
  background: var(--white)!important;
  color: var(--accent)!important;
  box-shadow: 0 5px 15px var(--accent)!important;
  transform: translateY(-5px);
}
.divider{
  background: var(--shadow);
  height: 3px;
  width: 80%;
  border-radius: 5px;
}
</style>
