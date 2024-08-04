// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/styles/global.css'],
  modules: [
    '@nuxt/ui',
    "@nuxt/image",
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  ui: {
    global: false,
  },
  colorMode: {
    preference: 'light',
  },
  fonts: {
    experimental: {
      processCSSVariables: true
    },
    defaults: {
      weights: [400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic'],
    },
    families: [
      { name: 'Poppins', provider: 'google' },
    ],
  },
})