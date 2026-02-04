// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/i18n", "@vueuse/motion/nuxt"],

  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        dir: "ltr",
        file: "en.json",
      },
      {
        code: "ku",
        iso: "ku-IQ",
        name: "کوردی",
        dir: "rtl",
        file: "ku.json",
      },
      {
        code: "ar",
        iso: "ar-IQ",
        name: "العربية",
        dir: "rtl",
        file: "ar.json",
      },
    ],
    langDir: "../locales",
    defaultLocale: "en",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  ssr: true,

  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },

  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
  },

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
