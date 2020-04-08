//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    drawerList: ["首页", "首页", "首页", "首页", "首页"],
    menuOpen: false,
  },
  onLoad: function() {
  },
  menuChange() {
    let {
      menuOpen
    } = this.data
    this.setData({
      menuOpen: !menuOpen
    })
  },
  memoClose(e){
    this.setData({
      menuOpen: false
    })
  }
})