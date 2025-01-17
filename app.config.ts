// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Endura Docs',
    description: 'Empower Your Sustainability Journey with Endura.',

    socials: {
      github: 'aryzac-io/endura-docs',
    },

    github: {
      branch: 'main',
      repo: 'endura-docs',
      owner: 'aryzac-io',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },

    image: '/favicon.svg'
  }
})