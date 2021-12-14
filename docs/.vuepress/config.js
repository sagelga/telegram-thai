module.exports = {
    lang: 'th-TH',
    title: 'Telegram ภาษาไทย',
    description: 'กลุ่มแปลภาษา Telegram ภาษาไทย',
    logo: 'https://telegram.org/img/t_logo.svg',

    themeConfig: {
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
