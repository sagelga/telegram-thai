import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'กลุ่มการแปลภาษา Telegram ภาษาไทย',
  tagline: 'ร่วมแปล Telegram ให้เป็นภาษาไทยไปด้วยกัน',
  favicon: 'favicon.ico',

  url: 'https://telegram.sagelga.com',
  baseUrl: '/',

  organizationName: 'sagelga',
  projectName: 'telegram-thai',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'th',
    locales: ['th'],
  },

  stylesheets: [
    {
      href: 'https://template.sagelga.com/styles/stylesheet.css',
      type: 'text/css',
    },
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'preload', as: 'image', href: '/icon/android-chrome-192x192.png' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon/apple-touch-icon.png' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon/favicon-32x32.png' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon/favicon-16x16.png' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'msapplication-TileColor', content: '#3a0839' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'theme-color', content: '#ffffff' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/sagelga/telegram-thai/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-M6T0MZ2093',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'icon/android-chrome-512x512.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
