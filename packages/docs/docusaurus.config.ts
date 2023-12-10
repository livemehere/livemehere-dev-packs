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
    metadata: [
      { name: "keywords", content: "javascript, typescript, library, react" },
    ],
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
