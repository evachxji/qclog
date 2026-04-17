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
   * 处理封面图：从media中随机选择一张，视频则添加截图参数
   */
  processVideoCover() {
    var modules = this.data.modules
    for (var i = 0; i < modules.length; i++) {
      var module = modules[i]
      var media = module.media

      // 从 media 中随机选择一张作为封面
      if (media && media.length > 0) {
        var randomIndex = Math.floor(Math.random() * media.length)
        var coverUrl = media[randomIndex]

        // 如果是视频，添加截图参数
        if (this.isVideoUrl(coverUrl)) {
          coverUrl = coverUrl + '?x-oss-process=video/snapshot,t_0,f_jpg,m_fast'
        }

        module.cover = coverUrl
      }

      // 处理媒体列表中的视频缩略图
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
