// components/Drawer/Drawer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    drawerList: {
      type: Array,
      value: ''
    },
    menuOpen: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    memoClose(){
      this.triggerEvent("memoCloseA");
    }
  }
})
