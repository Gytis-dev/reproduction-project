export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  devtools: { enabled: false },
  nitro: {
    prerender: {
      routes: ["/something/value", "/something-translated/translated-value"],
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
      {
        name: "Nederlands",
        code: "nl",
        iso: "nl-NL",
        file: "nl.json",
      },
    ],
    customRoutes: "config",
    pages: {
      something: {
        en: "/something/value",
        nl: "/something-translated/translated-value",
      },
    },
    detectBrowserLanguage: false,
  },
});
