// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  let hash = new Map()
  for (let i = 0; i < strs.length; i++) {
      let str = strs[i].split('').sort().join()
      if (hash.has(str)) {
          let arr = hash.get(str)
          arr.push(strs[i])
          hash.set(str, arr)
      } else {
          hash.set(str, [strs[i]])
      }
  }
  return [...hash.values()]
};
