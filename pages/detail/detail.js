// pages/detail/detail.js
Page({
  data: {
    module: null,
    media: [],
    leftColumn: [],   // 左列 - 主要放竖图
    rightColumn: [],  // 右列 - 主要放横图
    imageInfoMap: {}  // 存储图片尺寸信息
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
      var thumbnail = isVideo ? this.addVideoSnapshot(item) : item

      processedMedia.push({
        url: item,
        isVideo: isVideo,
        thumbnail: thumbnail,
        originalIndex: i,
        orientation: 'unknown' // 未知朝向，等待加载后判断
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
    var len = url.length
    var suffix = url.substring(len - 4, len)
    return suffix === '.mp4'
  },

  /**
   * 为视频URL添加截图参数显示第一帧
   */
  addVideoSnapshot(url) {
    return url + '?x-oss-process=video/snapshot,t_0,f_jpg,m_fast'
  },

  /**
   * 初始化瀑布流布局
   * 初始时将所有媒体项分配到两列，保持平衡
   */
  initWaterfall() {
    var media = this.data.media
    var leftCount = 0
    var rightCount = 0

    // 为每个媒体项分配列
    for (var i = 0; i < media.length; i++) {
      var item = media[i]
      
      if (item.isVideo) {
        item.orientation = 'landscape'
      }
      
      // 分配到较短的列
      if (leftCount <= rightCount) {
        item.column = 'left'
        leftCount++
      } else {
        item.column = 'right'
        rightCount++
      }
    }

    // 触发更新
    this.setData({
      media: [...media]
    })
  },

  /**
   * 图片加载完成，获取尺寸信息并更新朝向
   */
  onImageLoad(e) {
    var originalIndex = e.currentTarget.dataset.originalIndex
    var width = e.detail.width
    var height = e.detail.height

    // 判断朝向：宽高比 > 1 为横图，<= 1 为竖图
    var orientation = width > height ? 'landscape' : 'portrait'

    // 更新图片信息
    var imageInfoMap = this.data.imageInfoMap
    imageInfoMap[originalIndex] = {
      width: width,
      height: height,
      orientation: orientation,
      loaded: true
    }

    // 更新媒体项的朝向
    var media = this.data.media
    for (var i = 0; i < media.length; i++) {
      if (media[i].originalIndex === originalIndex) {
        media[i].orientation = orientation
        break
      }
    }

    this.setData({
      imageInfoMap: imageInfoMap,
      media: [...media]
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
        url: '/pages/video/video?url=' + encodeURIComponent(mediaItem.url)
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
      title: this.data.module ? this.data.module.name + ' · 暖色Vlog' : '暖色Vlog',
      path: '/pages/detail/detail?moduleId=' + (this.data.module ? this.data.module.id : '')
    }
  }
})