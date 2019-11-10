const themeConfig = require('./config/theme/')

module.exports = {
  title: "恍然大明白",
  description: 'Take your passion and make it come true.',
  dest: 'gh-pages',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'],
  base: '/',// 设置站点根路径
  repo: 'wangjian92.github.io'
}  