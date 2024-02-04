// const PENDING = 'pending'
// const RESOLVED = 'resolved'
// const REJECTED = 'rejected'

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

// //手写 promise.all

// function promiseAll(promises) {

//   return new Promise((resolve, reject) => {
//     if (!Array.isArray(promises)) {
//       throw new TypeError('arguments must be an array')
//     }
//     let resolvedCounter = 0
//     let promiseNum = promises.length
//     let resolvedResult = []
//     for (let i = 0; i < promiseNum; i++) {
//       Promise.resolve(promises[i].then(value => {
//         resolvedCounter++
//         resolvedResult[i] = value
//         if (resolvedCounter === promiseNum) {
//           return resolve(resolvedResult)
//         }
//       }), error => {
//         return reject(error)
//       })
//     }
//   })

// }
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1)
//   }, 5000)
// })
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2)
//   }, 2000)
// })
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3)
//   }, 3000)
// })
// // promiseAll([p1, p2, p3]).then(res => {
// //   console.log('res:', res)
// // })

// function promiseAll(promises) {

//   return new Promise((resolve, reject) => {
//     if (!Array.isArrry(promises)) {
//       throw new TypeError('must be an array')
//     }

//     let counter = 0
//     const len = promises.length
//     const result = []

//     for (let i = 0; i < len; i++) {
//       Promise.resolve(promises[i]).then(res => {
//         counter++
//         result.push(res)
//         if (counter === len) return reject(result)
//       }, err => {
//         return reject(err)
//       })
//     }
//   })

// }
// function promiseRace(args) {
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < args.length; i++) {
//       args[i].then(resolve, reject)
//     }
//   })
// }

// promiseRace([p1, p2, p3]).then(res => {
//   console.log(res)
// })


