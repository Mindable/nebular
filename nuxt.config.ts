// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      'postcss-color-gray': {},
    },
  },
  tailwindcss: { exposeConfig: true },
})