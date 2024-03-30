/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const m = n * 2
  let ans = []
  let path = Array(m)
  function dfs(i, open) {
    if (i === n * 2) {
      ans.push(path.join(''))
      return
    }
    if (open < n) {
      // 可以填左括号
      path[i] = '('
      dfs(i + 1, open + 1)
    }
    if (i - open < open) {
      // 可以填右括号
      path[i] = ')'
      dfs(i + 1, open)
    }
  }
  dfs(0, 0)
  return ans
}
function generateParenthesis(n) {
  const m = 2 * n
  const res = []
  const path = []
  const dfs = (i, open) => {
    if (i === m) {
      res.push(path.join(''))
      return
    }
    if (open < n) {
      path[i] = '('
      dfs(i + 1, open + 1)
    }
    if (i - open < open) {
      path[i] = ')'
      dfs(i + 1, open)
    }
  }
  dfs(0, 0)
  return res
}
console.log(generateParenthesis(3))
