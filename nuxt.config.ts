// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "nuxt-icon",
  ],
  googleFonts: {
    families: {
      Rubik: true,
    },
  },
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "/api",
    },
  },
  colorMode: {
    dataValue: "theme",
  },
});
