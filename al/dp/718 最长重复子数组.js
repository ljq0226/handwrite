/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]  [3,2,1]

//动态规划

var findLength = function (A, B) {
  const m = A.length
  const n = B.length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  let res = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      res = Math.max(res, dp[i][j])
    }
  }
  // const dp = new Array(n + 1).fill(0);
  // let res = 0
  // for (let i = 1; i <= m; i++) {
  //     for (let j = n; j >= 1; j--) {
  //         if (A[i - 1] == B[j - 1]) {
  //             dp[j] = dp[j - 1] + 1;
  //         } else {
  //             dp[j] = 0;
  //         }
  //         res = Math.max(dp[j], res);
  //     }
  // }

  return res
}

//暴力解法
var findLength2 = function (A, B) {
  const m = A.length
  const n = B.length
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i] == B[j]) {
        let subLen = 1
        while (i + subLen < m && j + subLen < n && A[i + subLen] == B[j + subLen]) {
          subLen++
        }
        res = Math.max(subLen, res)
      }
    }
  }
  return res
}
