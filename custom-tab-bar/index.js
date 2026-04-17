// custom-tab-bar/index.js
Component({
  data: {
    active: 0,
    ripple: -1,
    tabs: [
      { text: '相册', path: '/pages/index/index' },
      { text: '开发中', path: '/pages/developing/developing' }
    ]
  },

  methods: {
    onTabTap(e) {
      const index = e.currentTarget.dataset.index
      const path = e.currentTarget.dataset.path

      if (index === this.data.active) return

      // 波纹动画
      this.setData({ ripple: index })
      setTimeout(() => this.setData({ ripple: -1 }), 400)

      // 切换 Tab
      wx.switchTab({ url: path })
    }
  },

  attached() {
    // 根据当前页面路径同步 active 状态
    const pages = getCurrentPages()
    if (pages.length) {
      const curPage = pages[pages.length - 1]
      const route = '/' + curPage.route
      const idx = this.data.tabs.findIndex(t => t.path === route)
      if (idx !== -1) this.setData({ active: idx })
    }
  }
})
