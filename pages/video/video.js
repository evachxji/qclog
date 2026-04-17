// pages/video/video.js
Page({
  data: {
    videoUrl: ''
  },

  onLoad(options) {
    // 接收视频URL并解码
    var url = decodeURIComponent(options.url)
    console.log('视频URL:', url)
    this.setData({
      videoUrl: url
    })
  },

  onReady() {
    // 页面初次渲染完成后自动播放视频
    this.videoContext = wx.createVideoContext('video-player')
    this.videoContext.play()
  },

  onShareAppMessage() {
    return {
      title: '视频播放 · 暖色Vlog',
      path: '/pages/video/video?url=' + encodeURIComponent(this.data.videoUrl)
    }
  },

  onVideoError(e) {
    console.error('视频播放错误:', e.detail)
    wx.showToast({
      title: '视频加载失败',
      icon: 'none'
    })
  }
})