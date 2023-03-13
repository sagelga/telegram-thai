// const fs = require("fs");

module.exports = {
    lang: 'th-TH',
    title: 'เทเลแกรม | Telegram',
    description: 'กลุ่มแลกเปลี่ยนและแปลภาษา Telegram ให้เป็นภาษาไทย',

    head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/icon/apple-touch-icon.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/icon/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/icon/favicon-16x16.png"}],
        ['link', { rel: "mask-icon", href: "/icon/safari-pinned-tab.svg", color: "#3a0839"}],
        ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
        ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
        ['meta', { name: "theme-color", content: "#ffffff"}],
      ],

    themeConfig: {
        logo: '/favicon/android-chrome-192x192.png',

        repo: 'sagelga/telegram-thai',
        repoLabel: 'GitHub',

        docsRepo: 'https://github.com/sagelga/telegram-thai',
        docsBranch: 'main',

        editLink: true,
        editLinkText: 'แก้ไขเนื้อหาในหน้านี้',
        editLinkPattern: ':repo/edit/:branch/docs/:path',

        backToHome: 'กลับหน้าหลัก',

        lastUpdated: true,
        lastUpdatedText: 'อัพเดทล่าสุด',

        contributors: true,
        contributorsText: 'แก้ไขโดย',

        // Navigation

        navbar: require('./navbar/navbar.js'),

    },

    plugins: [
        [
            '@vuepress/plugin-google-analytics',
            {
                id: 'G-M6T0MZ2093',
            },
        ],
    ],
}
