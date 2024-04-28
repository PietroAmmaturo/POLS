<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faPuzzlePiece, faBellConcierge } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faPuzzlePiece, faBellConcierge)
</script>
