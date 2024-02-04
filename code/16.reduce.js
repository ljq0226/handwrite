// Array.prototype.myReduce = function (callback, preValue) {
//   if (typeof callback !== 'function') {
//     throw new Error(`${callback} is not a function !`)
//   }

//   let index = 0
//   let len = this.length
//   if (preValue === undefined || preValue === null) {
//     index = 1
//     preValue = this[0]
//   }

//   for (; index < len; index++) {
//     preValue = callback(preValue, this[index], index, this)
//   }
//   return preValue
// }

Array.prototype.myReduce = function (callback, preValue) {
  if (typeof callback !== 'function') {
    throw new Error(`${callback} is not a function!`)
  }
  let index = 0
  let len = this.length
  if (preValue === undefined || preValue === null) {
    index = 1
    preValue = this[0]
  }
  for (; index < len; index++) {
    preValue = callback(preValue, this[index], index, this)
    console.log('preValue', preValue)
  }
  return preValue
}

const arr = [1, 2, 3, 4, 5, 6]

// console.log('Array.prototype.reduce 1:', arr.reduce((a, b) => a + b))
// console.log('Array.prototype.reduce 2:', arr.reduce((a, b) => a + b, ''))

console.log(
  'my reduce 1:',
  arr.myReduce((a, b) => a + b)
)
// console.log('my reduce 2:', arr.myReduce((a, b) => a + b, ''))
