<script setup lang="ts">
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="content">
    <h1>Our contacts</h1>
    <div class="information">
      <p><font-awesome-icon class="icon" icon="at" /> info@medusa.org</p>
      <p><font-awesome-icon class="icon" icon="phone" /> + 1 (415) 867-9342</p>
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
.information{
  margin: 0;
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
}
.form_container{
  background: var(--light);
  width: auto;
  margin: 0 25px 100px 25px;
  border-radius: 15px;
}
form{
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 18px 33px;
  gap: 10px;
  width: auto;
}
input{
  font-family: 'Montserrat';
  font-size: 16px;
  width: 75%;
  background: white;
  color: var(--accent);
  border-radius: 5px;
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
.icon{
  color: var(--light);
}
p{
  font-weight: 500;
  font-size: 16pt;
}
</style>
