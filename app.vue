<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas, faPuzzlePiece, faBellConcierge, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFacebook, faInstagram, faFontAwesome, faPuzzlePiece, faBellConcierge, faPlus, faMinus)

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
</script>
