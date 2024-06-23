// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'MEDUSA Center',
      charset: "utf-8",
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: "description",
          content: "A Center to support Women in difficulty and victims of violence"
        },
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
  }
});