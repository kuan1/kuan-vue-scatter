import { getImageData, getListData, animateTransform, preload } from './utils'

export default class {
  constructor(dom, config = {}) {
    this.dom = dom
    this.content = dom.querySelector(`.${config.contentClass || 'vue-scatter'}`)
    this.canvasCount = config.canvasCount || 30

    this.size = { width: 0, height: 0 }
    this.canvasList = []
  }

  async init() {
    // 防止多次调用
    if (this.canvasList.length) return this.size
    if (this.content) {
      this.content.style.opacity = 1
    }

    // 预加载图片
    await preload(this.dom)

    // 获取dom的canvas的数据
    const { data, width, height } = await getImageData(this.dom)

    // canvas数据分散列表
    const listData = getListData(data, this.canvasCount)

    // 塞入多个canvas
    listData.forEach(itemData => {
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      canvas.className = 'scatter-canvas'
      const ctx = canvas.getContext('2d')
      ctx.putImageData(new ImageData(itemData, width, height), 0, 0)
      this.dom.appendChild(canvas)
      this.canvasList.push(canvas)
    })
    if (this.content) {
      this.content.style.opacity = 0
    }
    this.size = {
      width,
      height
    }
    return this.size
  }
  async start() {
    await this.init()
    return new Promise((resolve) => {
      for (let i = 0; i < this.canvasList.length; i++) {
        const c = this.canvasList[i]
        setTimeout(() => {
          animateTransform(
            c,
            200,
            -100,
            Math.floor(Math.random() * 50) - 25,
            2000
          );
          setTimeout(() => {
            c.remove()
            this.canvasList.pop()
            if (this.canvasList.length <= 0) {
              resolve()
            }
          }, 2050)
        }, 70 * i)
      }
    })
  }
}


