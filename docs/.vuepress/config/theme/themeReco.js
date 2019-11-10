module.exports = {
  // type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: 'Tag' // 默认 “标签”
    }
  },
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'wj',
  // 备案号
  record: '',
  // 项目开始时间
  startYear: '2017',
  // valine 设置
  valineConfig: {
    appId: 'Um5PchoOL8W9rVWuoGbL2p7v-MdYXbMMI',
    appKey: 'E2SkzTUViyQgwahoF5uQwdcY',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    notify: true,
    recordIP: true
  }
}