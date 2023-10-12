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
        text: '简介', link: '/manual/index'
      },
      {
        text: '数据管理',
        items: [
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
