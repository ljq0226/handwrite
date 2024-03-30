const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]
let len = arr.length
// 1. Set
const arr1 = Array.from(new Set(arr))

// 2. 两层 for 循环加上 splice
function forCircle(arr) {
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        len--
        j--
      }
    }
  }
  return arr
}


//3. indexOf include filter

function IndexOfArr(arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) newArr.push(arr[i])
  }
  // for (let i = 0; i < arr.length; i++) {
  //   if (!res.includes(arr[i])) res.push(arr[i]);
  // }
  return newArr
}
function filterArr(arr){
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

//4.map 
function mapArray(arr){
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true)
      res.push(arr[i]);
    }
  }
  return res;
}
console.log('arr', IndexOfArr(arr))


// 数组交集
// 输入：nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// 输出：[3,4]
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    
  // map
  if (nums.length === 0) return [];
  let map = new Map();
  let res = []
  for (let num of nums[0]) {
      map.set(num, (map.get(num) || 0) + 1);
  }
  for (let i = 1; i < nums.length; i++) {
      let newMap = new Map()
      for (const num of nums[i]) {
          if (map.has(num)) {
              newMap.set(num, map.get(num) + 1)
          }
      }
      console.log(newMap)
      map = newMap
  }
  for (const [key, value] of map.entries()) {
      if (value === nums.length) {
          res.push(key)
      }
  }
  return res.sort((a, b) => a - b)

  //计数排序
  const counts = new Array(1000 + 10).fill(0)
  for (const numArr of nums) {
      for (const num of numArr) {
          counts[num]++
      }
  }
  return counts.map((val, idx) => val === nums.length ? idx : 0).filter(val => val !== 0)
  // 常规解法
  let a = nums[0]
  for (const num of nums) {
      a = a.filter(_ => num.includes(_))
  }
  return a.sort((a, b) => a - b)
};
