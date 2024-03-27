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
function control(list,num){
  function fn(){
    const len = list.length
    if(!len) return 
    const max = Math.min(len,num)
    for(let i = 0;i<max;i++){
      const p = list.shift()
      num--
      p.finally(()=>{
        num++
        fn()
      })
    }
  }
  fn()
}

function mockRequest(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Request completed in ${time} ms`);
      resolve();
    }, time);
  });
}

// 创建一个包含5个请求的数组
let requestList = [
  mockRequest(1000),
  mockRequest(2000),
  mockRequest(1500),
  mockRequest(3000),
  mockRequest(500)
];

// 使用control函数控制请求
control(requestList, 2);


// 场景：把fn当作一个请求，现在creator中的2表示限制一次性最多只能发送2次请求，超过了2次就需要等上一个执行完毕才能继续。
// 试问：现连续执行了5次setup请求，如何在creator中限制它的请求数


function creator(count) {
  let queue = []
  // fn: () => Promise
  function setup(fn) {
    const execFn = async () => {
      try {
        await fn()
      } catch (err) {
        console.log(err)
      } finally {
        queue = queue.filter((task) => task !== execFn)
        if (queue.length >= count) {
          queue[count - 1]()
        }
      }
    }
    if (queue.length < count) {
      queue.push(execFn)
      execFn()
    } else {
      queue.push(execFn)
    }
  }
  return setup
}

const setup = creator(2)

// setup(fn)
// setup(fn)
// setup(fn)
// setup(fn)
// setup(fn)

function fn() {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log(1)
          resolve(1)
      }, 2000)
  })
}

