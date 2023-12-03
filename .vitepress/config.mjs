import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TIMESlice",
  srcDir: 'docs',
  vite: {     // <=== insert this section
    ssr: {
      noExternal: ["vuetify"]
    }
  },
  description: "医学影像管理与分析平台",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/icon.png',
    footer: {
      message: 'Powered by Key Laboratory of Cardiovascular Imaging and Research of Liaoning Province, CHINA.'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '下载', link: '/download' }
    ],

    sidebar: [
      {
        text: '简介', link: '/manual/index',
      },
      {
        text: '软件激活', link: '/manual/activation',
      },
      {
        text: '数据管理',
        items: [
          { text: '数据库管理', link: '/manual/database' },
          { text: '数据结构', link: '/manual/dataManage' },
          { text: '影像导入', link: '/manual/importScan' },
          { text: '表格导入', link: '/manual/importTable' },
          { text: '标签管理', link: '/manual/labelManage' }
        ]
      },
      { text: '下载', link: '/download' }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
