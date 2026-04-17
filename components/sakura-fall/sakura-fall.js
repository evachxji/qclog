Component({
  properties: {
    // 是否显示樱花
    visible: {
      type: Boolean,
      value: true
    },
    // 樱花数量
    count: {
      type: Number,
      value: 30
    }
  },

  data: {
    sakuraList: []
  },

  lifetimes: {
    attached() {
      this.generateSakura()
    }
  },

  observers: {
    'visible': function(visible) {
      if (visible) {
        this.generateSakura()
      }
    }
  },

  methods: {
    generateSakura() {
      const count = this.data.count
      const sakuraList = []
      const animations = ['fall-straight', 'fall-left', 'fall-right', 'fall-wave']
      
      for (let i = 0; i < count; i++) {
        // 随机水平位置 (0-100%)
        const left = Math.random() * 100
        // 随机动画时长 (8-18秒)
        const duration = 8 + Math.random() * 10
        // 随机延迟 (0-15秒)
        const delay = Math.random() * 15
        // 随机大小 (0.6-1.2)
        const scale = 0.6 + Math.random() * 0.6
        // 随机透明度 (0.6-0.9)
        const opacity = 0.6 + Math.random() * 0.3
        // 随机动画类型
        const animationType = animations[Math.floor(Math.random() * animations.length)]
        // 随机旋转
        const rotate = Math.random() * 360
        
        sakuraList.push({
          id: `sakura-${i}`,
          style: `
            left: ${left}%;
            animation-name: ${animationType};
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            opacity: ${opacity};
          `,
          petalStyle: `
            transform: scale(${scale}) rotate(${rotate}deg);
          `
        })
      }
      
      this.setData({ sakuraList })
    }
  }
})
