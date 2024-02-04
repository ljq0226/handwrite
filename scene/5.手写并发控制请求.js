class TaskControl {
  constructor(maxConcurrent) {
    //最大并发数
    this.maxConcurrent = maxConcurrent
    //当前并发数
    this.currentConcurrent = 0
    //任务执行队列
    this.taskQueue = []
  }
  addTask(task) {
    this.taskQueue.push(task)
    this.next()
    return this
  }
  next() {
    if (this.currentConcurrent < this.maxConcurrent && this.taskQueue.length) {
      const task = this.taskQueue.shift()
      this.currentConcurrent++
      task
        .then((res) => {
          console.log('value', res)
        })
        .catch((err) => {
          console.log('err', err)
        })
        .finally(() => {
          this.currentConcurrent--
          this.next()
        })
    }
    return this
  }
}
class TaskControl {
  constructor(maxConcurrent) {
    //最大并发数
    this.maxConcurrent = maxConcurrent
    //当前并发数
    this.currentConcurrent = 0
    //任务执行队列
    this.taskQueue = []
  }
  addTask(task) {
    this.taskQueue.push(task)
    this.next()
  }
  next() {
    if (this.currentConcurrent < this.maxConcurrent && this.taskQueue.length) {
      const task = this.taskQueue.shift()
      this.currentConcurrent++
      task()
        .then((res) => {
          console.log('res', res)
        })
        .catch((err) => {
          console.log('err', err)
        })
        .finally(() => {
          this.currentConcurrent--
          this.next()
        })
    }
    return this
  }
}

//控制异步并发数
function control(list, num) {
  function fn() {
    const len = list.length
    if (!len) return
    const max = Math.min(len, num)
    for (let i = 0; i < max; i++) {
      const p = list.shift()
      num--
      p.finally(() => {
        num++
        fn()
      })
    }
  }
  fn()
}

function control(list, num) {
  function fn() {
    const len = list.length
    if (!len) return
    const max = Math.min(num, len)
    for (let i = 0; i < max; i++) {
      const task = list.shift()
      num--
      task.finally(() => {
        num++
        fn()
      })
    }
  }
  fn()
}
