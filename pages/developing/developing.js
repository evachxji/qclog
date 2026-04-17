// pages/developing/developing.js
Page({
  data: {
  },

  onLoad() {},
  onShow() {
    // 更新 tabBar 选中状态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ active: 1 })
    }
  },
  onShareAppMessage() {
    return {
      title: '暖色Vlog · 生活记录',
      path: '/pages/developing/developing'
    }
  }
})