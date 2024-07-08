<script setup lang="ts">
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

  useSeoMeta({
  title: "MEDUSA - About Us",
  description: "An overview of our History and our Mission for the MEDUSA Center"
})
</script>

<template>
  <AppStructuralLinker family-page="about"></AppStructuralLinker>
    <div class="content">
      <AppHeader title="About Us"></AppHeader>
    <div id="mission" class="subinfo mission">
      <h2><font-awesome-icon class="icon" icon="shield-heart"/> Our mission</h2>
      <p>At Medusa Support Center, our mission is to provide comprehensive <strong>assistance to women</strong> who have experienced abuse, violence, and injustice. We are dedicated to offering immediate support through <strong>crisis intervention, counseling, and legal assistance</strong>. Beyond immediate care, we focus on <strong>long-term rehabilitation</strong> by empowering women with <strong>educational workshops, job readiness programs, and community-building initiatives</strong>. Our goal is to create a safe, supportive environment where <strong>survivors can heal, regain their strength, and rebuild their lives</strong>. United by our commitment to this mission, our team and community members work together <strong>to foster resilience, independence, and hope</strong> for all women who seek our help.</p>
    </div>
    <div id="history" class="subinfo history">
      <h2><font-awesome-icon class="icon" icon="landmark"/> Our history</h2>
      <p>Medusa Support Center was founded with the vision of <strong>turning trauma into strength</strong>. Our name, "Medusa," is inspired by the Greek myth of Medusa, a figure who, despite suffering a grave injustice, is often interpreted as a <strong>symbol of resilience and transformation</strong>. Established in 2010 by a group of dedicated advocates and survivors, the center was created to address the urgent need for a <strong>safe space where women could find refuge and support</strong>. Over the years, Medusa has grown into a <strong>beacon of hope, offering a wide range of services and programs designed to empower women</strong> to overcome their past and embrace a future of strength and independence.</p>
      </div>
    <div id="practical" class="subinfo practical">
      <h2><font-awesome-icon class="icon" icon="circle-info"/> Practical information</h2>
      <p>Medusa Support Center is located at <strong>123 Hope Street, New Haven, CT</strong>. We are easily accessible by public transportation, with several bus routes stopping nearby. <strong>Free parking</strong> is also available on-site. Our center is open <strong>Monday through Friday from 9:00 AM to 6:00 PM,</strong> and on <strong>Saturdays from 10:00 AM to 4:00 PM</strong>. For <strong>immediate assistance</strong> or to schedule an appointment, please <strong>call us at (415) 867-9342</strong>. We look forward to welcoming you and providing the support you need.</p>
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
  color: var(--light);
  text-align: center;
}
p{
  text-align: justify;
  white-space: pre-wrap;
}
strong{
  color: var(--accent);
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 60px;
  gap: 60px;
  width: 100%;
  background: #FFFFFF;
}
.subinfo{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
}
</style>
