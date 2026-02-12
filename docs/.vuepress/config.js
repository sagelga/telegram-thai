import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { defineUserConfig } from 'vuepress'
import head from './head/head.js'
import navbar from './navbar/navbar.js'

export default defineUserConfig({
  lang: 'th-TH',
  title: 'กลุ่มการแปลภาษา Telegram ภาษาไทย',
  description: 'ร่วมแปล Telegram ให้เป็นภาษาไทยไปด้วยกัน',
  head,

  bundler: viteBundler(),

  theme: defaultTheme({
    logo: '/favicon/android-chrome-192x192.png',

    repo: 'sagelga/telegram-thai',
    repoLabel: 'GitHub',

    docsRepo: 'https://github.com/sagelga/telegram-thai',
    docsBranch: 'main',

    editLink: true,
    editLinkText: 'รายงานปัญหาในหน้านี้',
    editLinkPattern: ':repo/edit/:branch/docs/:path',

    backToHome: 'กลับหน้าหลัก',

    lastUpdated: true,
    lastUpdatedText: 'อัพเดทล่าสุด',

    contributors: false,
    contributorsText: 'แก้ไขโดย',

    // Navigation
    navbar,
  }),

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-M6T0MZ2093',
    }),
  ],
})
