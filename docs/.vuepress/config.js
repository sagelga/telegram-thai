// const fs = require("fs");

module.exports = {
    lang: 'th-TH',
    title: 'กลุ่มการแปลภาษา Telegram ภาษาไทย',
    description: 'ร่วมแปล Telegram ให้เป็นภาษาไทยไปด้วยกัน',
    head: require('./head/head.js'),

    themeConfig: {
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
};
