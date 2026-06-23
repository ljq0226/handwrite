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
var minSubArrayLen = function (s, nums) {
  const n = nums.length
  let left = 0 // 窗口左边界
  let sum = 0 // 窗口内元素和
  let minLen = Infinity // 记录最小长度，初始化为无穷大

  // 右指针遍历，扩张窗口
  for (let right = 0; right < n; right++) {
    sum += nums[right]

    // 当窗口和满足条件时，尝试收缩左边界，寻找更短的子数组
    while (sum >= s) {
      // 更新最小长度
      minLen = Math.min(minLen, right - left + 1)
      // 左指针右移，缩小窗口
      sum -= nums[left]
      left++
    }
  }

  // 如果minLen还是无穷大，说明没有符合条件的子数组，返回0
  return minLen === Infinity ? 0 : minLen
}

const nums = [2, 3, 1, 2, 4, 3]
const res = minSubArrayLen(7, nums)
console.log('res', res)
