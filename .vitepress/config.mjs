import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TIMESlice 手册",
  srcDir: 'docs',
  vite: {     // <=== insert this section
    ssr: {
      noExternal: ["vuetify"]
    }
  },
  description: "关于TIMESlice的一切",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/icon.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '下载', link: '/download' }
    ],

    sidebar: [
      {
        text: '手册',
        items: [
          { text: '简介', link: '/manual/index' },
          { text: '数据管理', link: '/manual/dataManage' }
        ]
      },
      {
        items: [
          { text: '下载', link: '/download' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
