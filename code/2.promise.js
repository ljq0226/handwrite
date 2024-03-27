const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  let called
  if ((typeof x === 'object' && x != null) || typeof x === 'function') {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          (y) => {
            if (called) return
            called = true
            resolvePromise(promise2, y, resolve, reject)
          },
          (r) => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}

class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    let resolve = (value) => {
      if (value instanceof MyPromise) {
        return value.then(resolve, reject)
      }

      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onResolvedCallbacks.forEach((fn) => fn())
      }
    }

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach((fn) => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (err) => {
            throw err
          }
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }

      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })

    return promise2
  }

  catch(errCallback) {
    return this.then(null, errCallback)
  }

  finally(callback) {
    return this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => value)
      },
      (reason) => {
        return MyPromise.resolve(callback()).then(() => {
          throw reason
        })
      }
    )
  }

  static resolve(data) {
    return new MyPromise((resolve, reject) => {
      resolve(data)
    })
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }

  static all(promises) {
    // if (!Array.isArray(values)) {
    //   const type = typeof values
    //   return new TypeError(`TypeError: ${type} ${values} is not iterable`)
    // }
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

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        let val = promises[i]
        if (val && typeof val.then === 'function') {
          val.then(resolve, reject)
        } else {
          resolve(val)
        }
      }
    })
  }
}

// Promise.defer = Promise.deferred = function () {
//   let dtd = {}
//   dtd.promise = new Promise((resolve, reject) => {
//     dtd.resolve = resolve
//     dtd.reject = reject
//   })
//   return dtd
// }

// module.exports = Promise
// let p1 = new MyPromise((resolve, reject) => {
//   resolve(1)
// })
// p1.then((value) => {
//   console.log(value) // 应该打印出 1
// })

// let p2 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2)
//   }, 1000)
// })
// p2.then((value) => {
//   console.log(value) // 1秒后应该打印出 2
// })
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok1')
  }, 2000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok2')
  }, 1000)
})

MyPromise.all([1, 2, 3, p1, p2]).then(
  (data) => {
    console.log('resolve', data)
  },
  (err) => {
    console.log('reject', err)
  }
)
// let p3 = new MyPromise((resolve, reject) => {
//   reject(new Error('error'))
// })
// p3.catch((err) => {
//   console.log(err) // 应该打印出 Error: error
// })

// let p4 = new MyPromise((resolve, reject) => {
//   resolve(1)
// })
// let p5 = p4.then((value) => {
//   return value + 1
// })
// p5.then((value) => {
//   console.log(value) // 应该打印出 2
// })

// let p6 = new MyPromise((resolve, reject) => {
//   resolve(1)
// })
// let p7 = p6.then((value) => {
//   return new MyPromise((resolve, reject) => {
//     resolve(value + 1)
//   })
// })
// p7.then((value) => {
//   console.log(value) // 应该打印出 2
// })

function PromiseRetry(promiseFn, times = 3) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        const res = await promiseFn()
        resolve(res)
        break
      } catch (error) {
        if (!times) reject(error)
      }
    }
  })
}

function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const len = promises.length
    let counter = 0
    const res = []
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          res[i] = value
          counter++
          if (counter === len) {
            return resolve(res)
          }
        },
        (error) => {
          return reject(error)
        }
      )
    }
  })
}
function PromsieRace(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}
function PromiseAny(promises) {
  return new Promsie((resolve, reject) => {
    const errors = []
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (value) => {
          return resolve(value)
        },
        (error) => {
          errors[i] = error
          if (errors.length == promises.length) {
            return reject(errors)
          }
        }
      )
    }
  })
}
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

// // test
// let p1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve(1)
//   }, 1000)
// })
// let p2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve(2)
//   }, 2000)
// })
// let p3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve(3)
//   }, 3000)
// })
// // PromiseAll([p3, p1, p2]).then(res => {
// //   console.log(res) // [3, 1, 2]
// // })

// PromiseRace([p3, p1, p2]).then((res) => {
//   console.log(res) // [3, 1, 2]
// })

// function PromiseRetry(promiseFn, times = 3) {
//   return new Promise(async (resolve, reject) => {
//     while (times--) {
//       try {
//         const res = await promiseFn()
//         resolve(res)
//         break
//       } catch (error) {
//         if (!times) reject(error)
//       }
//     }
//   })
// }

// Promise.retry = function (promiseFn, times = 3) {
//   return new Promise(async (resolve, reject) => {
//     while (times--) {
//       try {
//         var ret = await promiseFn()
//         resolve(ret)
//         break
//       } catch (error) {
//         if (!times) reject(error)
//       }
//     }
//   })
// }

// function getProm() {
//   const n = Math.random()
//   return new Promise((resolve, reject) => {
//     setTimeout(() => (n > 0.9 ? resolve(n) : reject(n)), 1000)
//   })
// }

// Promise.retry(getProm)

function promiseResolve(promise2, x, resolve, reject) {
  if (x === promise2) {
    return new TypeError('chaining cycle promise')
  }
  if (typeof x === 'object' && x != null) {
    let called
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          (y) => {
            if (called) return
            called = true
            resolvePromise(promise2, y, resolve, reject)
          },
          (r) => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}

const promise = new MyPromise((resolve, reject) => {
  reject('失败');
}).then().then().then(data=>{
  console.log(data);
},err=>{
  console.log('err',err);
})

