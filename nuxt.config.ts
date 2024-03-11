// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', "@nuxt/image"],
  runtimeConfig: {
    sdwebuiPath: "http://gpuc01:7860/"
  },
  devtools: { enabled: true },
  tailwindcss: {
    // Options
  },
  colorMode: {
    classSuffix: ''
  }
})