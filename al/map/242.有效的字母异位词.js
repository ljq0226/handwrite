// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 示例 1: 输入: s = "anagram", t = "nagaram" 输出: true
// 示例 2: 输入: s = "rat", t = "car" 输出: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  let char_count = new Map();
  for(let item of s) {
    char_count.set(item, (char_count.get(item) || 0) + 1) ;
  }
  for(let item of t) {
    if(!char_count.get(item)) return false;
    char_count.set(item, char_count.get(item)-1);
  }
  return true;
};
const s = "rat", t = "car"
console.log(isAnagram(s,t))
