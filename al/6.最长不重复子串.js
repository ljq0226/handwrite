function findLongestSubstring(str) {
  let left = 0;
  let maxLen = 0;
  let set = new Set();

  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];

    while (set.has(currentChar)) {
      set.delete(str[left]);
      left++;
    }
    set.add(currentChar);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  const longestSubstring = str.slice(left, left + maxLen);
  return longestSubstring;
}

var lengthOfLongestSubstring = function(s) {
  let map = new Map(),
    max = 0,
    start = 0,
    end = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i);
    }
    if (j - i + 1 > max) {
      max = j - i + 1;
      start = i;
      end = j;
    }
    map.set(s[j], j);
  }
  return s.slice(start, end + 1);
};

const str = "1231456";
const longestSubstring = lengthOfLongestSubstring(str);
console.log(longestSubstring); // 输出 "231456"
