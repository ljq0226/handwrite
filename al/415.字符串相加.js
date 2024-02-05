// 415. 字符串相加
// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    carry = 0
  ans = []
  while (i >= 0 || j >= 0 || carry !== 0) {
    let c1 = i >= 0 ? num1.charAt(i) - '0' : 0
    let c2 = j >= 0 ? num2.charAt(j) - '0' : 0
    let sum = c1 + c2 + carry
    ans.push(sum % 10)
    carry = Math.floor(sum / 10)
    i--
    j--
  }
  return ans.reverse().join('')
}

