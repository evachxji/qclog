// pages/index/index.js
// 引入模块数据
const modulesData = require('../../data/modules.js')

Page({
  data: {
    modules: []
  },

  onLoad() {
    // 加载模块数据
    this.setData({
      modules: modulesData
    })
    // 处理视频封面图，添加截图参数
    this.processVideoCover()
    // 存储到全局数据
    var app = getApp()
    app.globalData.modules = this.data.modules
  },

  /**
   * 点击模块卡片 → 跳转到详情页面
   */
  onModuleTap(e) {
    var index = e.currentTarget.dataset.index
    var module = this.data.modules[index]
    wx.navigateTo({
      url: '/pages/detail/detail?moduleId=' + module.id
    })
  },
  
  /**
   * 处理视频封面图，为mp4视频添加截图参数显示第一帧
   */
  processVideoCover() {
    var modules = this.data.modules
    for (var i = 0; i < modules.length; i++) {
      var module = modules[i]
      // 处理模块封面
      if (this.isVideoUrl(module.cover)) {
        module.cover = module.cover + '?x-oss-process=video/snapshot,t_0,f_jpg,m_fast'
      }
      // 处理媒体列表中的视频缩略图
      var media = module.media
      for (var j = 0; j < media.length; j++) {
        if (this.isVideoUrl(media[j])) {
          media[j] = media[j] + '?x-oss-process=video/snapshot,t_0,f_jpg,m_fast'
        }
      }
    }
    this.setData({
      modules: modules
    })
  },
  
  /**
   * 判断是否为视频URL
   */
  isVideoUrl(url) {
    var len = url.length
    var suffix = url.substring(len - 4, len)
    return suffix === '.mp4'
  },

  onShow() {
    // 更新 tabBar 选中状态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ active: 0 })
    }
  },
  onShareAppMessage() {
    return {
      title: '暖色Vlog · 生活记录',
      path: '/pages/index/index'
    }
  }
})
