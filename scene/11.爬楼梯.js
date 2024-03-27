// 爬楼梯，总共 n 层， 每次可最多爬 m 层，有多少种方法

function climbStairs(n, m) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = Math.max(0, i - m); j < i; j++) {
      dp[i] += dp[j];
    }
  }

  return dp[n];
}

console.log(climbStairs(5, 2));  // 输出：8

