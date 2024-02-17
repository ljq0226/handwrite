// 给定一个字符串 s 和一个整数 k，从字符串开头算起, 每计数至 2k 个字符，就反转这 2k 个字符中的前 k 个字符。
// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
// 示例:
// 输入: s = "abcdefg", k = 2
// 输出: "bacdfeg"
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const len = s.length
  const resArr = s.split('')
  for (let i = 0; i < len - 1; i = i + 2 * k) {
      let l = i - 1, r = i + k > len ? len : i + k
      while (++l < --r) {
          [resArr[l], resArr[r]] = [resArr[r], resArr[l]]
      }
  }
  return resArr.join('')
};
