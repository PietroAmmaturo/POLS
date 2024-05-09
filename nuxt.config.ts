// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Dog Shelter'
    }
  },
  css: ['~/assets/css/general.css'],
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  modules: ['@nuxtjs/supabase', '@pinia/nuxt'],
  pinia: {
    storesDirs: [
      './stores/**'
    ]
  },
  // supabase options
  supabase: {
    // do not redirect if not authenticated (not needed)
    redirect: false
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
});
