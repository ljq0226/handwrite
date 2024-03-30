// 实现一个 HardMan:
// HardMan(“jack”) 输出:
// I am jack

// HardMan(“jack”).rest(10).learn(“computer”) 输出
// I am jack
//等待10秒
// Start learning after 10 seconds
// Learning computer

// HardMan(“jack”).restFirst(5).learn(“chinese”) 输出
//等待5秒
// Start learning after 5 seconds
// I am jack
// Learning chinese

class HardMan {
  constructor(name) {
    this.name = name
    this.tasks = []
    setTimeout(() => this.next())
    this.tasks.push(() => {
      console.log(`I am ${name}`)
      this.next()
    })
  }
  next() {
    const task = this.tasks.shift()
    task && task()
  }
  wait(sec) {
    setTimeout(() => {
      console.log(`Start learning after ${sec} seconds`)
      this.next()
    }, sec * 1000)
  }
  waitSecond(sec) {
    console.log(`//等待${sec}秒`)
    this.next()
  }
  rest(time) {
    this.tasks.push(this.waitSecond(time))
    this.tasks.push(this.wait(time))
    return this
  }
  restFirst(time) {
    this.tasks.unshift(this.wait(time))
    this.tasks.unshift(this.waitSecond(time))
    return this
  }
  learn(subject) {
    this.tasks.push(() => {
      console.log(`Learning ${subject}`)
      this.next()
    })
    return this
  }
}
new HardMan("jack").restFirst(5).learn("chinese")
new HardMan('mike').rest(3).learn('computer')



// promsie 解决
class _HardMan {
  constructor (name) {
      this.tasks = [];
      // 很关键的一步， setTimeout为异步任务，这样可以使得所有的任务入队以后，才开始执行第一个next函数，主要是考虑了restFirst的情况
      setTimeout(() => this.next());
      this.tasks.push(() => 
          new Promise(resolve => {
              console.log(`I am ${name}`)
              resolve()
          })
      )

      //其实这里可以不用return this，因为调用构造函数没有更改this的指向
      return this
  }

  next () {
      let task = this.tasks.shift();
      task && task().then(() => this.next());
  }

  rest(sec) {
      this.tasks.push(() =>
          new Promise(resolve => {
              console.log(`//等待${sec}秒..`)
              setTimeout(() => {
                  console.log(`Start learning after ${sec} seconds`)
                  resolve()
              }, sec * 1000);
          })
      )
      return this
  }

  restFirst (sec) {
      this.tasks.unshift(() =>
          new Promise(resolve => {
              console.log(`//等待${sec}秒..`)
              setTimeout(() => {
                  console.log(`Start learning after ${sec} seconds`)
                  resolve()
              }, sec * 1000);
          })
      )
      return this
  }

  learn(params) {
      this.tasks.push(() => 
          new Promise(resolve => {
              console.log(`Learning ${params}`)
              resolve()
          })
      )
      return this
  }
}

const HardMan = function (name) {
  return new _HardMan(name)
}

HardMan("jack").restFirst(3).learn("Chinese").learn("Englsih").rest(2).learn("Japanese")

// //等待3秒..
// Start learning after 3 seconds
// I am jack
// Learning Chinese
// Learning Englsih
// //等待2秒..
// Start learning after 2 seconds
// Learning Japanese


//async await 优化

class _HardMan {
  constructor(name) {
      this.tasks = [];
      // 很关键的一步， setTimeout为异步任务，这样可以使得所有的任务入队以后，才开始执行第一个next函数，主要是考虑了restFirst的情况
      setTimeout(async () => {
          for (let task of this.tasks) {
              await task()
          }
      })
      this.tasks.push(() =>
          new Promise(resolve => {
              console.log(`I am ${name}`)
              resolve()
          })
      )

      //其实这里可以不用return this，因为调用构造函数没有更改this的指向
      return this
  }

  wait(sec) {
      return new Promise(resolve => {
          console.log(`//等待${sec}秒..`)
          setTimeout(() => {
              console.log(`Start learning after ${sec} seconds`)
              resolve()
          }, sec * 1000);
      })
  }

  rest(sec) {
      this.tasks.push(() => this.wait(sec))
      return this
  }

  restFirst(sec) {
      this.tasks.unshift(() => this.wait(sec))
      return this
  }

  learn(params) {
      this.tasks.push(() =>
          new Promise(resolve => {
              console.log(`Learning ${params}`)
              resolve()
          })
      )
      return this
  }
}

const HardMan = function (name) {
  return new _HardMan(name)
}

HardMan("jack").restFirst(3).learn("Chinese").learn("Englsih").rest(2).learn("Japanese")

// //等待3秒..
// Start learning after 3 seconds
// I am jack
// Learning Chinese
// Learning Englsih
// //等待2秒..
// Start learning after 2 seconds
// Learning Japanese
