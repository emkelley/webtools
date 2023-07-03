// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      script: [
        {
          src: "https://cdn.usefathom.com/script.js",
          type: "text/javascript",
          defer: true,
          "data-site": "VYFIBJEV",
        },
      ],
    },
  },
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
