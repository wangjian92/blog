const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign(
  {},
  themeReco,
  {
    nav,
    sidebar,
    // logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 密钥
    // keyPage: {
    //   // keys: ['1221'],
    //   color: '#3eaf7c', // 登录页动画球的颜色
    //   lineColor: '#42b983' // 登录页动画线的颜色
    // }
  }
)