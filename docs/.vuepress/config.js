// const fs = require("fs");

module.exports = {
    lang: 'th-TH',
    title: 'กลุ่มแปลภาษา Telegram',
    description: 'กลุ่มแปลภาษา Telegram ภาษาไทย',

    themeConfig: {
        logo: 'https://telegram.org/img/t_logo.svg',

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
        sidebar: {
            '/contribute/': [{
                text: 'เข้าร่วม',
                children: [
                    '/contribute/',
                    '/contribute/guideline/'
                ]
            }],
            '/install/': [{
                text: 'ใช้งาน',
                children: [
                    '/install/',
                ]
            }],
            '/community/': [{
                text: 'ชุมชน',
                children: [
                    '/community/',
                    '/community/guideline/'
                ]
            }],
        },

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

// function getSideBar(root) {
//     return fs
//         .readdirSync(process.cwd() + '/docs/' + root)
//         .map(sidebar => sidebar.replace('/index.md', ''))
//         .replace(sidebar => )
// }
