import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TIMESlice manual",
  srcDir: 'docs',
  description: "Everything about TIMESlice",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: '/download' }
    ],

    sidebar: [
      {
        text: 'TOC',
        items: [
          { text: 'Manual', link: '/manual' },
          { text: 'Download', link: '/download' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
