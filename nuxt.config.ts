// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: "keywords",
          content: "Medusa, Women, Help, Violence, Support, Center"
        }
      ]
    }
  },

  css: ['~/assets/css/general.css'],

  routeRules: {
    // prerender index route by default
    '/*': { prerender: true },
  },

  modules: ['@nuxtjs/supabase', '@pinia/nuxt', "@nuxt/image"],

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

  compatibilityDate: '2024-07-13'
});