<template>
  <NuxtLayout>
    <NavigationBar></NavigationBar>
    <NuxtPage></NuxtPage>
    <Footer></Footer>
  </NuxtLayout>
</template>
<script setup lang="ts">
import NavigationBar from "~/components/NavigationBar.vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import Footer from "~/components/Footer.vue";

import { fas, faPuzzlePiece, faBellConcierge, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faPuzzlePiece, faBellConcierge, faPlus, faMinus)
</script>
