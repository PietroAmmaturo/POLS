// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
});
