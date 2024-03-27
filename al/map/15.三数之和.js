// 题目： 给定一个数组 nums，判断 nums 中是否存在三个元素a，b，c，使得 a + b + c = target，找出所有满足条件且不重复的三元组合

// 输入： nums: [5, 2, 1, 1, 3, 4, 6] ；target:8

// 输出： [[1, 1, 6], [1, 2, 5], [1, 3, 4]]
const nums = [5, 2, 1, 1, 3, 4, 6]
const target = 8
function findThreeSum(nums, target) {
  const res = []
  const len = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len - 1; i++) {
    if (i && nums[i - 1] === nums[i]) continue
    let [l, r] = [i + 1, len - 1]
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === target) {
        res.push([nums[i], nums[l], nums[r]])
        l++
        r--
        while (nums[l] == nums[l - 1]) l++
        while (nums[r] == nums[r + 1]) r--
      } else if (sum > target) {
        r--
      } else {
        l++
      }
    }
  }
  return res
}
// function findThree(nums, target) {
//   const res = []
//   const len = nums.length
//   nums.sort((a, b) => a - b)
//   for (let i = 0; i < len - 2; i++) {
//     if (i && nums[i] == nums[i - 1]) continue
//     let [l, r] = [i + 1, len - 1]
//     while (l < r) {
//       const sum = nums[i] + nums[l] + nums[r]
//       if (sum > target) {
//         r--
//       } else if (sum < target) {
//         l++
//       } else {
//         res.push([nums[i], nums[l], nums[r]])
//         l++
//         r--
//         while (nums[l] === nums[l - 1]) l++
//         while (nums[r] === nums[r + 1]) r--
//       }
//     }
//   }
//   return res
// }
// 用`双端指针`的方式，将三数之和转化为两数之和
// function findThree(nums, target) {
//   const res = []
//   const len = nums.length
//   for (let i = 0; i < len - 2; i++) {
//     if (i && nums[i] === nums[i - 1]) continue
//     let [l, r] = [i + 1, len - 1]
//     while (l < r) {
//       const sum = nums[i] + nums[l] + nums[r]
//       if (sum > target) {
//         r--
//       } else if (sum < target) {
//         l++
//       } else {
//         res.push([nums[i], nums[l++], nums[r--]])
//         while (nums[l] === nums[l - 1]) l++
//         while (nums[r] === nums[r + 1]) r--
//       }
//     }
//   }
//   return res
// }

const res = findThreeSum(nums, target)
console.log('res', res)
