function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}
const sum = (a, b, c) => {
  return a + b + c
}
const newSum = curry(sum)
const res = sum(1, 2, 2)
// const res = newSum(1)(2)(3)
console.log('res', res)

// const sum = (...args1) => {
//   const x = args1.reduce((pre, cur) => pre + cur)
//   return function (...args2) {
//     if (args2.length == 0) return x
//     const y = args2.reduce((pre, cur) => pre + cur)
//     return sum(x + y)
//   }
// }

// const res = sum(3, 1, 2)(2, 1)(3)()
// console.log('res', res)
