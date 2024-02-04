var titleToNumber = function (columnTitle) {
  let ans = 0
  for (let i = 0; i < columnTitle.length; i++) {
    ans = ans * 26 + (columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1)
    console.log('ans', ans)
  }
  return ans
}
// 输入：columnNumber = 2147483647
// 输出："FXSHRXW"
const columnNumber = 2147483647
const res = titleToNumber(columnNumber)
console.log('res', res)
