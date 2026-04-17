// pages/detail/detail.js
Page({
  data: {
    module: null,
    columns: [[], []], // 瀑布流两列
    media: []
  },

  onLoad(options) {
    // 从全局数据获取模块信息
    var app = getApp()
    var modules = app.globalData.modules
    var moduleData = null
    
    for (var i = 0; i < modules.length; i++) {
      if (modules[i].id === parseInt(options.moduleId)) {
        moduleData = modules[i]
        break
      }
    }
    
    if (!moduleData) {
      console.error('Module not found')
      return
    }
    
    var media = moduleData.media
    var processedMedia = []
    
    // 预处理媒体数据
    for (var i = 0; i < media.length; i++) {
      var item = media[i]
      var isVideo = this.checkIsVideo(item)
      var thumbnail = isVideo ? this.addVideoSnapshot(moduleData.cover) : item
      
      processedMedia.push({
        url: item,
        isVideo: isVideo,
        thumbnail: thumbnail
      })
    }
    
    this.setData({
      module: moduleData,
      media: processedMedia
    })
    
    // 初始化瀑布流布局
    this.initWaterfall()
  },

  /**
   * 检查是否为视频
   */
  checkIsVideo(url) {
    var len = url.length;
    var suffix = url.substring(len - 4, len);
    return suffix === '.mp4';
  },

  /**
   * 为视频URL添加截图参数显示第一帧
   */
  addVideoSnapshot(url) {
    return url + '?x-oss-process=video/snapshot,t_0,f_jpg,m_fast';
  },

  /**
   * 初始化瀑布流布局
   */
  initWaterfall() {
    var media = this.data.media
    var columns = [[], []]
    var columnIndex = 0
    
    // 简单的瀑布流布局，交替分配到两列
    for (var i = 0; i < media.length; i++) {
      columns[columnIndex].push(i)
      columnIndex = (columnIndex + 1) % 2
    }
    
    this.setData({
      columns: columns
    })
  },

  /**
   * 预览媒体文件
   */
  previewMedia(e) {
    var index = e.currentTarget.dataset.index
    var mediaItem = this.data.media[index]
    
    if (mediaItem.isVideo) {
      // 播放视频
      wx.navigateTo({
        url: '/pages/video/video?url=' + mediaItem.url
      })
    } else {
      // 预览图片
      var imageUrls = []
      for (var i = 0; i < this.data.media.length; i++) {
        if (!this.data.media[i].isVideo) {
          imageUrls.push(this.data.media[i].url)
        }
      }
      
      wx.previewImage({
        current: mediaItem.url,
        urls: imageUrls
      })
    }
  },

  onShow() {},
  onShareAppMessage() {
    return {
      title: this.data.module.name + ' · 暖色Vlog',
      path: '/pages/detail/detail?module=' + JSON.stringify(this.data.module)
    }
  }
})