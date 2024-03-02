// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let topKFrequent = function (nums, k) {
  let map = new Map(),
    arr = [...new Set(nums)]
  nums.map((num) => {
    if (map.has(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  })
  return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
}
