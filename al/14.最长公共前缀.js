function longestCommonPrefix(strs) {
  if (strs.length == 0) return ''
  let prefix = strs[0]
  for (let i = 0; i < prefix.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (i == strs[j].length || strs[j].charAt(i) != prefix.charAt(i)) {
        return prefix.substring(0, i)
      }
    }
  }
  return prefix
}

// 使用示例
let strs = ['flo1wer', 'flower', 'f2loweright']
console.log(longestCommonPrefix(strs)) // 输出："fl"
