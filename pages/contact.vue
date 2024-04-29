<script setup lang="ts">
  import navbar from "~/components/navbar.vue"
</script>

<template>
  <body>
  <div class="content">
<!--    <div class="navigation_bar">
      <div class="navbar_left">
        <p>Activities <span class="icon"></span></p>
        <p>People</p>
      </div>
      <span class="icon"></span>
      <div class="navbar_right">
        <span class="icon"></span>
        <p>About us</p>
        <p>Contact us</p>
      </div>
    </div>-->
    <navbar></navbar>
    <h1>Our contacts</h1>
    <div class="information">
      <p><span class="icon">@</span> mail@mail.com</p>
      <p><span class="icon"></span> + 39 XXX XXX XXXX</p>
    </div>
    <div class="form_container">
      <form>
        <div class="form_names">
          <label>Name and Surname: </label>
          <input type="text">
        </div>
        <div class="form_mail">
          <label>e-mail: </label>
          <input type="text">
        </div>
        <textarea rows="10" cols="30"></textarea>
        <input type="button" value="Send the message">
      </form>
    </div>
  </div>
  </body>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@font-face {
  font-family: 'AwesomeFont';
  src: url(assets/fonts/fa-solid-900.ttf);
}
body{
  margin: 0;
}
.icon{
  font-family: 'AwesomeFont';
}
h1{
  font-family: 'Montserrat';
  font-size: 64px;
  margin: 0;
}
.information{
  margin: 0;
  font-family: 'Montserrat';
  font-size: 16px;
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
  width: 33%;
}
form{
  font-family: 'Montserrat';
  font-size: 16px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 18px 33px;
  gap: 10px;
}
input{
  font-family: 'Montserrat';
  font-size: 16px;
}
textarea{
  width: 100%;
}
.form_mail{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  width: 100%;
}
.form_names{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  width: 100%;
}
/*.navigation_bar{
  font-size: 24px;
  font-weight: bold;
  font-family: 'Montserrat';
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #D9D9D9;
  border: 0;
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
}*/
</style>
