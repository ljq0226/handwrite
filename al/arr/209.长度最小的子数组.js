// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

// 示例：

// 输入：s = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let res = Infinity
  let l = 0,
    r = 0
  let sum = 0
  while (r < nums.length) {
    sum += nums[r]
    while (sum >= target) {
      res = Math.min(res, r - l + 1)
      sum -= nums[l]
      l++
    }

    r++
  }
  return res == Infinity ? 0 : res
}
const nums = [2, 3, 1, 2, 4, 3]
const res = minSubArrayLen(7, nums)
console.log('res', res)
