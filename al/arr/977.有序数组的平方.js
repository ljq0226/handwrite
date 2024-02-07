// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
// 示例 1：
// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
// 示例 2：

// 输入：nums = [-7,-3,2,3,11]
// 输出：[4,9,9,49,121]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let [l, r] = [0, nums.length - 1]
  while (l <= r) {
    const [num1, num2] = [nums[l] * nums[l], nums[r] * nums[r]]
    if (num1 < num2) {
      nums[r] = num2
    } else {
      nums[l] = nums[r]
      nums[r] = num1
    }
    r--
  }
  return nums
}

const nums = [-4, -1, 0, 3, 10]
const res = sortedSquares(nums)
console.log('res', res)
