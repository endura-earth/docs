export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ["@nuxt-themes/docus"],
  devtools: { enabled: true },

  runtimeConfig: {
    // The private keys which are only available server-side
    githubToken: "NUXT_GITHUB_TOKEN",
    // Keys within public are also exposed client-side
    public: {},
  },

  modules: ["@nuxthq/studio", "@nuxtjs/tailwindcss", "shadcn-nuxt"],

  app: {
    head: {
      title: "Endura Docs",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],

      link: [{ rel: "icon", type: "images/svg", href: "/favicon.svg" }],
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
