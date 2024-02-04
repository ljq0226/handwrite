//实现一个同步的 sleep
//(new LazyLog()).log(1).sleep(1000).log(3)

// class LazyLog {
//   log(str) {
//     console.log('str', str)
//     return this
//   }
//   sleep(time) {
//     const current = Date.now()
//     while (Date.now() - current < time) {}
//     return this
//   }
// }
// class LazyLog {
//   constructor() {
//     this.queue = Promise.resolve()
//   }
//   log(value) {
//     this.queue = this.queue.then(() => {
//       console.log('value', value)
//     })
//     return this
//   }
//   sleep(time) {
//     this.queue = this.queue.then(() => {
//       return new Promise((resolve) => {
//         setTimeout(resolve, time)
//       })
//     })
//     return this
//   }
// }

// const lazylog = new LazyLog().log(1).sleep(1000).log(3)

// 手写题2：实例链式调用：如let a = new Man();
// a.sleep(3000).sayHi().sleep(1000).sleep(2000).sayHi()；
// 写出Man()构造函数

class Sleep {
  constructor() {
    this.durationTime = 0
  }
  sayHi() {
    setTimeout(() => {
      console.log(' HIHIHIH!')
    }, this.durationTime)
    return this
  }
  sleep(time) {
    this.durationTime += time
    setTimeout(() => {
      console.log('Sleep time: ', time)
    }, this.durationTime)
    return this
  }
}

const a = new Sleep()
a.sleep(3000).sayHi().sleep(1000).sleep(2000).sayHi()
