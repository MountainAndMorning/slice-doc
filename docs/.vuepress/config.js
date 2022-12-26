const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  lang: 'EN',
  title: 'TIMESlice',
  description: 'TIMESlice manual',
  head: [
    ['link', { rel: 'icon', href: '/images/icon.png' }]
  ],
  theme: defaultTheme({
    navbar: [
      // NavbarItem

    ],
    logo: '/images/icon.png',
  }),
}