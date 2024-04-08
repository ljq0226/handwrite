// function flatten(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]))
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }

// 使用示例
let arr = [1, [2, [3, [4, 5]]]]
console.log(flatten(arr)) // 输出：[1, 2, 3, 4, 5]

function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
const nums = [1, [2, [3]], 4]
flatten(nums)
