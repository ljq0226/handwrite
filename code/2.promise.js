//promise
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
function MyPromise(fn) {
  var self = this
  this.state = PENDING
  this.value = null
  this.resolvedCallbacks = []
  this.rejectedCallbacks = []
  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject)
    }
  }

  function reject(error) {}
}
// function MyPromise(fn) {
//   var self = this

//   this.state = PENDING
//   this.value = null
//   this.resolvedCallbacks = []
//   this.rejectedCallbacks = []

//   function resolve(value) {
//     if (value instanceof MyPromise) {
//       return value.then(resolve, reject)
//     }
//     setTimeout(() => {
//       if (self.state === PENDING) {
//         self.state = RESOLVED
//         self.value = value
//         self.resolvedCallbacks.forEach(callback => callback(value))
//       }
//     }, 0)
//   }

//   function reject(reason) {
//     if (value instanceof MyPromise) {
//       return value.then(resolve, reject)
//     }
//     setTimeout(() => {
//       if (self.state === PENDING) {
//         self.state = REJECTED
//         self.value = reason
//         self.rejectedCallbacks.forEach(callback => callback(reason))
//       }
//     }, 0)
//   }

//   try {
//     fn(resolve, reject)
//   } catch (e) {
//     reject(e)
//   }
// }
// MyPromise.prototype.then = function (onResolved, onRejected) {

//   // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
//   onResolved =
//     typeof onResolved === "function"
//       ? onResolved
//       : function (value) {
//         return value;
//       };

//   onRejected =
//     typeof onRejected === "function"
//       ? onRejected
//       : function (error) {
//         throw error;
//       };

//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onResolved);
//     this.rejectedCallbacks.push(onRejected);
//   }
//   if (this.state === RESOLVED) {
//     onResolved(this.value);
//   }

//   if (this.state === REJECTED) {
//     onRejected(this.value);
//   }
// }
function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const len = promises.length
    let counter = 0
    let res = []
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          counter++
          res[i] = value
          if (counter === len) return resolve(res)
        },
        (error) => {
          return reject(error)
        }
      )
    }
  })
}

function PromiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}

function PromiseAny(promises) {
  return new Promise((resolve, reject) => {
    const errors = []
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (value) => {
          resolve(value)
        },
        (err) => {
          errors.push(err)
          if (errors.length == promises.length) {
            reject(errors)
          }
        }
      )
    }
  })
}

function PromiseAllSettled(promises) {
  return new Promise((resolve) => {
    const res = []
    const len = promises.length
    let counter = 0
    for (let i = 0; i < len; i++) {
      promises[i].then(
        (value) => {
          counter++
          res.push(value)
          counter === len && resolve(res)
        },
        (error) => {
          counter++
          res.push(error)
          counter === len && resolve(res)
        }
      )
    }
  })
}

// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1)
  }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2)
  }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3)
  }, 3000)
})
// PromiseAll([p3, p1, p2]).then(res => {
//   console.log(res) // [3, 1, 2]
// })

PromiseRace([p3, p1, p2]).then((res) => {
  console.log(res) // [3, 1, 2]
})

function PromiseRetry(promiseFn, times = 3) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        const res = await promiseFn()
        resolve(res)
        break
      } catch (error) {
        if(!times) reject(error)
      }
    }
  })
}

Promise.retry = function (promiseFn, times = 3) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        var ret = await promiseFn()
        resolve(ret)
        break
      } catch (error) {
        if (!times) reject(error)
      }
    }
  })
}

function getProm() {
  const n = Math.random()
  return new Promise((resolve, reject) => {
    setTimeout(() => (n > 0.9 ? resolve(n) : reject(n)), 1000)
  })
}

Promise.retry(getProm)
