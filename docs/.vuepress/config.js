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
      {
        text: '教程',
        link: '/guide/',
      },
      {
        text: '下载',
        link: '/download/',
      },
    ],
    logo: '/images/icon.png',
    sidebar: [
      // SidebarItem
      {
        text: '主界面',
        link: '/guide/mainview/',
      },
      {
        text: '中心线提取',
        link: '/guide/centerline/',
      },
      {
        text: '斑块分析',
        link: '/guide/contour/',
      },
      {
        text: '图像分割',
        link: '/guide/seg/',
      },
      {
        text: '下载',
        link: '/download/',
      },
    ],
  }),
}