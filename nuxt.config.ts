// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Ateliê Mesa & Cia',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  // CSS global aplicado em todas as páginas
  css: ['~/assets/css/main.css'],
})