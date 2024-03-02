/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const path = []
  const res = []
  const len = nums.length
  const backTracking = (n, k, used) => {
      if (path.length === k) {
          res.push(Array.from(path))
          return
      }
      for (let i = 0; i < k; i++) {
          if (used[i]) continue
          path.push(n[i])
          used[i] = true
          backTracking(n, k, used)
          path.pop()
          used[i] = false
  }
  }
  backTracking(nums, len, [])
  return res
};
