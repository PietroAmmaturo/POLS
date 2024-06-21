<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
<div class="footer">
  <div class="wrapper">
    <div class="sub">
      <NuxtLink to="/activities"><p class="subtitle"><strong>The activities</strong></p></NuxtLink>
      <NuxtLink to="/projects"><p>All the projects</p></NuxtLink>
      <NuxtLink to="/services"><p>All the services</p></NuxtLink>
    </div>
    <div class="sub">
      <p class="subtitle"><strong>The center</strong></p>
      <NuxtLink to="/people"><p>Staffers</p></NuxtLink>
      <NuxtLink to="/about"><p>About us</p></NuxtLink>
      <NuxtLink to="/contact"><p>Our contacts</p></NuxtLink>
    </div>
    <div class="sub alt">
      <NuxtLink to="/chatbot"><div class="bot"><p>CHAT WITH THE BOT</p></div></NuxtLink>
      <div class="social">
        <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f"/>
        <font-awesome-icon class="icon" icon="fa-brands fa-twitter"/>
        <font-awesome-icon class="icon" icon="fa-brands fa-instagram"/>
        <font-awesome-icon class="icon" icon="fa-brands fa-whatsapp"/>
        <font-awesome-icon class="icon" icon="fa-brands fa-telegram-plane"/>
        <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in"/>
        <font-awesome-icon class="icon" icon="fa-brands fa-youtube"/>
      </div>
      <div class="center">
        <p><font-awesome-icon icon="location-dot" /> MEDUSA Center Ltd</p>
        <p>123 Hope Street, New Haven, CT<br>United States</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
  strong{
    color: var(--white) !important;
  }
  .footer{
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--light);
    color: var(--white);
    /*margin-top: 50px;*/
    width: 100%;
    @media screen and (max-width: 700px){
      height: auto;
      padding: 25px 0 25px 0;
    }
    height: 210px;
  }
  .wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    @media screen and (max-width: 700px){
      gap: 25px;
    }
  }
.sub{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.alt{
  align-items: flex-end;
  gap: 15px;
  text-align: right;
  @media screen and (max-width: 700px){
    align-items: center;
    text-align: center;
  }
}
.bot{
  background: white;
  color: var(--light);
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  font-weight: bold;
  box-shadow: 0 3px 5px var(--accent);
}
.bot:hover{
  color: var(--accent);
}
.social{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  .icon{
    cursor: pointer;
  }
}
.subtitle{
  margin-bottom: 10px;
}
a:hover{
  text-decoration: white underline;
}
</style>