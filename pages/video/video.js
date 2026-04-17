// pages/video/video.js
Page({
  data: {
    videoUrl: ''
  },

  onLoad(options) {
    // 接收视频URL
    this.setData({
      videoUrl: options.url
    })
  },

  onShow() {
    // 页面显示时自动播放视频
    const videoContext = wx.createVideoContext('video-player')
    videoContext.play()
  },

  onShareAppMessage() {
    return {
      title: '视频播放 · 暖色Vlog',
      path: '/pages/video/video?url=' + this.data.videoUrl
    }
  }
})