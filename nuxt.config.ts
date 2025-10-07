// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["shadcn-docs-nuxt"],
  compatibilityDate: "2024-07-06",

  app: {
    head: {
      title: "Endura Docs",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],

      link: [{ rel: "icon", type: "images/svg", href: "/favicon.svg" }],
    },
  },

  modules: ["@pinia/nuxt"],
});

