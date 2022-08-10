const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  lang: 'zh-CN',
  title: 'SLICE',
  description: 'Slice 文档',
  head: [
    ['link', { rel: 'icon', href: '/images/icon.png' }]
  ],
  theme: defaultTheme({
    navbar: [
      // NavbarItem

    ],
    logo: '/images/icon.png',
    sidebar: [
      // SidebarItem
      {
        text: '简介',
        link: '/guide/',
      },
      {
        text: '下载',
        link: '/download/',
      },
    ],
  }),
}