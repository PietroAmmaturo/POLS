<script setup lang="ts">
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
  useSeoMeta({
    title: "MEDUSA - Contacts",
  description: "Our Contacts to address every need or doubt"
})
</script>

<template>
  <AppStructuralLinker family-page="contact"></AppStructuralLinker>
  <div class="content">
    <AppHeader title="Contacts"></AppHeader>
    <div class="information">
      <h2 id="details">Contact details</h2>
      <p><font-awesome-icon class="icon" icon="at" /> <strong>e-mail:</strong> info@medusa.org</p>
      <p><font-awesome-icon class="icon" icon="phone" /> <strong>For information:</strong> + 1 (415) 867-9342</p>
      <p><font-awesome-icon class="icon" icon="phone" /> <strong>Hotline:</strong> + 1 (888) 555-3768</p>
      <p><strong id="social">Our social medias</strong></p>
      <div class="social">
        <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f"/>
        <font-awesome-icon class="icon" icon="fa-brands fa-twitter"/>
        <font-awesome-icon class="icon" icon="fa-brands fa-instagram"/>
        <font-awesome-icon class="icon" icon="fa-brands fa-whatsapp"/>
        <font-awesome-icon class="icon" icon="fa-brands fa-telegram-plane"/>
        <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in"/>
        <font-awesome-icon class="icon" icon="fa-brands fa-youtube"/>
      </div>
    </div>
    <div class="faq">
      <h2 id="email">Do you have any question for us?</h2>
      <p>Please, send us an e-mail using the form below!</p>
    </div>
    <div class="form_container">
      <form>
        <div class="form_names">
          <label for="name">Name and Surname: </label>
          <input type="text" id="name">
        </div>
        <div class="form_mail">
          <label for="e-mail">e-mail: </label>
          <input type="email" id="e-mail">
        </div>
        <label for="message" hidden>Message: </label>
        <textarea id="message" rows="10" cols="30"></textarea>
        <input class="b" type="button" value="Send the message">
      </form>
    </div>
    <div class="information">
      <h2 id="where">Where are we?</h2>
      <p id="address"><font-awesome-icon class="icon" icon="location-dot" /> 123 Hope Street, New Haven<br>CT, United States</p>
    </div>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16953.47397867382!2d-72.93953618904466!3d41.30931819669333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d8443a8070e5%3A0xf6a354c659b264ed!2sNew%20Haven%2C%20Connecticut%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1720877105377!5m2!1sit!2sit" width="100%" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
h2{
  text-align: center;
}
.information{
  margin: 0;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: -30px 25px 0 25px;
  border-radius: 15px;
}
form{
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 33px 33px;
  gap: 20px;
  width: auto;
}
input{
  font-family: 'Montserrat';
  font-size: 16px;
  width: 75%;
  background: white;
  color: var(--accent);
  border-radius: 5px;
  cursor: pointer;
}
.b{
  width: auto;
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
  text-align: center;
}
.map{
  width: 75%;
  margin-bottom: 40px;
}
#address{
  text-align: center;
}
strong{
  color: var(--light);
}
#social{
  margin-top: 15px;
}
.social{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  .icon{
    cursor: pointer;
    font-size: 24px;
    color: var(--black);
  }
}
.faq{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
