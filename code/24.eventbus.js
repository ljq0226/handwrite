class EventBus {
  constructor() {
    this.task = {}
  }
  on(type, fn) {
    if (!this.task[type]) {
      this.task[type] = []
    }
    this.task[type].push(fn)
  }
  emit(type, ...args) {
    if (this.task[type]) {
      // console.log(this.task[type])
      this.task[type].map((fn) => fn(...args))
    }
  }
  off(type, fn) {
    if (this.task[type]) {
      this.task[type] = this.task[type].filter((item) => item !== fn)
    }
  }
  once(type, fn) {
    const f = (...args) => {
      fn(...args)
      this.off(type, f)
    }
    this.on(type, f)
  }
}

const eventBus = new EventBus()

const fn = (word) => console.log(word)

// 添加监听器
eventBus.on('say', fn)

// 触发事件
eventBus.emit('say', 'Hello EventBus!')

// 移除监听器
eventBus.off('say', fn)
// 触发事件
eventBus.emit('say', 'Hello again!')
// 添加只执行一次的监听器
eventBus.once('say', () => console.log('This will only be logged once'))
// 再次触发事件，这次不会有输出，因为监听器已经被移除
eventBus.emit('say', 'Hello again!')
