// 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
// 例如：
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
// 示例 1：
// 输入：columnNumber = 1
// 输出："A"

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (n) {
  if (n <= 0) return ''
  let res = []
  while (n) {
      n--
      let remain = n % 26
      res.unshift(String.fromCharCode(remain + 65))
      n = Math.floor(n / 26)
  }

  return res.join('')
};
