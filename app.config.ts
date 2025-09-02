export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "Endura | Learning Hub",
      description:
        "Endura is your digital exchange for private company Environmental, Social, and Governance (ESG) data in Africa.",
    },
    theme: {
      customizable: true,
      color: "orange",
      radius: 0.5,
    },
    header: {
      title: "Endura Docs",
      showTitle: false,
      darkModeToggle: true,
      logo: {
        light: "/logo.svg",
        dark: "/logo-dark.svg",
      },
      nav: [],
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/endura-earth/docs",
          target: "_blank",
        },
      ],
    },

    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: "Copyright © 2025",
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/endura-earth/docs",
          target: "_blank",
        },
      ],
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [
        {
          title: "Star on GitHub",
          icon: "lucide:star",
          to: "https://github.com/endura-earth/docs",
          target: "_blank",
        },
        {
          title: "Create Issues",
          icon: "lucide:circle-dot",
          to: "https://github.com/endura-earth/docs/issues",
          target: "_blank",
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});

