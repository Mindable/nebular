// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/styles/global.css'],
  modules: ['@nuxt/ui'],
  ui: {
    global: false,
  },
  colorMode: {
    preference: 'light',
  },
})
