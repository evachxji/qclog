// pages/index/index.js
Page({
  data: {
    modules: [
      {
        id: 1,
        name: '3月小确幸',
        cover: 'https://yechen77.oss-cn-hangzhou.aliyuncs.com/3%E6%9C%88%E5%B0%8F%E7%A1%AE%E5%B9%B8.mp4',
        media: [
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/3%E6%9C%88%E5%B0%8F%E7%A1%AE%E5%B9%B8.mp4'
        ]
      },
      {
        id: 2,
        name: 'AI故事',
        cover: 'https://yechen77.oss-cn-hangzhou.aliyuncs.com/AI故事/1.jpg',
        media: [
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/AI故事/1.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/AI故事/2.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/AI故事/3.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/AI故事/4.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/AI故事/5.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/AI故事/6.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/AI故事/7.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/AI故事/8.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/AI故事/9.jpg'
        ]
      },
      {
        id: 3,
        name: '【2026】寻觅年味',
        cover: 'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/01.jpg',
        media: [
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/01.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/02.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/03.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/04.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/05.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/06.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/07.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/08.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/09.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/10.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/11.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/12.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/13.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/14.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/15.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/16.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/17.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/18.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/19.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/20.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/21.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/22.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/23.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/24.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2026】寻觅年味/25.mp4'
        ]
      },
      {
        id: 4,
        name: '【2025】岁岁伴朝夕',
        cover: 'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/01.jpg',
        media: [
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/01.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/02.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/03.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/04.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/05.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/06.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/07.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/08.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/09.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/10.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/11.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/12.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/13.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/14.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/15.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/16.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/17.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/18.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/19.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/20.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/21.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/22.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/23.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/24.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/25.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/26.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/27.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/28.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/29.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/30.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/31.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/32.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/33.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/34.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/35.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/36.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/37.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/38.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/39.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/40.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/41.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/42.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2025】岁岁伴朝夕/43.jpg'
        ]
      },
      {
        id: 5,
        name: '【2024】成长皆可期',
        cover: 'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/01.mp4',
        media: [
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/01.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/02.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/03.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/04.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/05.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/06.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/07.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/08.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/09.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/10.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/11.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/12.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/13.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/14.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/15.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/16.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/17.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/18.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/19.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/20.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/21.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/22.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/23.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/24.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/25.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/26.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/27.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/28.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/29.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/30.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/31.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/32.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/33.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/34.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/35.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/36.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/37.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/38.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/39.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/40.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/41.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/42.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/43.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/44.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/45.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/46.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/47.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/48.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/49.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/50.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/51.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/52.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/53.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/54.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/55.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/56.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/57.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2024】成长皆可期/58.mp4'
        ]
      },
      {
        id: 6,
        name: '【2023】岁岁常欢愉',
        cover: 'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/01.mp4',
        media: [
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/01.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/02.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/03.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/04.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/05.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/06.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/07.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/08.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/09.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/10.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/11.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/12.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/13.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/14.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/15.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/16.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/17.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/18.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/19.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/20.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/21.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/22.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/23.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/24.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/25.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/26.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/27.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/28.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/29.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/30.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/31.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/32.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/33.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/34.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/35.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/36.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/37.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/38.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/39.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/40.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/41.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/42.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/43.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/44.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/45.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/46.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/47.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2023】岁岁常欢愉/48.jpg'
        ]
      },
      {
        id: 7,
        name: '【2022】愿有岁月可回首',
        cover: 'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/01.jpg',
        media: [
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/01.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/02.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/03.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/04.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/05.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/06.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/07.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/08.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/09.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/10.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/11.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/12.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/13.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/14.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/15.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/16.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/17.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/18.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/19.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/20.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/21.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/22.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/23.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/24.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/25.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/26.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/27.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/28.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/29.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/30.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/31.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/32.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/33.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/34.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/35.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/36.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/37.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/38.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/39.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/40.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/41.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/42.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/43.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/44.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/45.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/46.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/47.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/48.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/49.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/50.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2022】愿有岁月可回首/51.jpg'
        ]
      },
      {
        id: 8,
        name: '【2021】穿越赴山海',
        cover: 'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/01.jpg',
        media: [
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/01.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/02.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/03.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/04.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/05.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/06.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/07.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/08.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/09.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/10.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/11.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/12.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/13.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/14.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/15.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/16.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/17.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/18.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/19.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/20.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/21.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/22.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/23.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/24.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/25.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/26.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/27.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/28.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/29.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/30.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/31.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/32.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/33.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/34.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/35.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/36.mp4',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/37.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/38.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/39.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/40.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/41.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/42.jpg',
          'https://yechen77.oss-cn-hangzhou.aliyuncs.com/【2021】穿越赴山海/43.jpg'
        ]
      }
    ]
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

  onLoad() {
    // 处理视频封面图，添加截图参数
    this.processVideoCover()
    // 存储到全局数据
    var app = getApp()
    app.globalData.modules = this.data.modules
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

  onShow() {},
  onShareAppMessage() {
    return {
      title: '暖色Vlog · 生活记录',
      path: '/pages/index/index'
    }
  }
})
