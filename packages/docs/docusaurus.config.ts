import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const baseURL =
  process.env.NODE_ENV === "development" ? "/" : "/livemehere-dev-packs/";

const githubURL = "https://github.com/livemehere/livemehere-dev-packs";

const config: Config = {
  title: "@livemehere/dev-packs",
  tagline: "Javscript, Typescript, React packages for web development",
  favicon: "img/favicon.ico",

  url: "https://livemehere.github.io",
  baseUrl: baseURL,
  organizationName: "livemehere",
  projectName: "livemehere-dev-packs",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  themes: [],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
        path: "en",
        label: "English",
      },
      ko: {
        htmlLang: "ko-KR",
        path: "ko",
        label: "한국어",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: githubURL,
        },
        blog: {
          showReadingTime: true,
          editUrl: githubURL,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.png",
    algolia: {
      // The application ID provided by Algolia
      appId: "8H9IR2RS9Z",

      // Public API key: it is safe to commit it
      apiKey: "3767326e90c66b79b6d03b60480f8041",

      indexName: "first-index",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: "external\\.com|domain\\.com",

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: "/docs/", // or as RegExp: /\/docs\//
        to: "/",
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      //... other Algolia params
    },
    navbar: {
      title: "livemehere-dev-packs",
      logo: {
        alt: "dev-kong-logo",
        src: "/img/devkong-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: githubURL,
          label: "GitHub",
          "aria-label": "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: githubURL,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} livemehere.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
