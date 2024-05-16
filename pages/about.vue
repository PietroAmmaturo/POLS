<script setup lang="ts">
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="content">
    <h1>About us</h1>
    <div class="information">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    <div class="form_container">
      <img id = "group_img" src = "~/assets/img/group_image.jpg" alt="group_image"/>
    </div>
  </div>
</template>

<style scoped>
body{
  margin: 0;
}
h1{
  margin: 0;
  width: auto;
  text-align: center;
}

#group_img {
  width: 100%;
  max-width: 1000px;
  height: auto;
}
.information{
  margin: 0;
  font-size: 16px;
  text-align: center;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 60px;
  position: relative;
  width: 100%;
  background: #FFFFFF;
}
.form_container{
  background: #D9D9D9;
  border: black solid 1px;
  width: auto;
  margin: 0 25px 0 25px;
}

</style>
