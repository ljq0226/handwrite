function myFlat(arr, deep = 10) {
  if (deep == 0) return arr
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return [...pre, ...myFlat(cur, deep - 1)]
    } else {
      return [...pre, cur]
    }
  }, [])
}

function flat(nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (Array.isArray(nums[i])) {
      res = res.concat(flat(nums[i]))
    } else {
      res.push(nums[i])
    }
  }
  return res
}
function flatten(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}

function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

const res = myFlat([1, 2, 3, [4, [5, [6]]]])
console.log('res', res)
// Array.prototype.getLevel()
Array.prototype.getLevel = function (level = 1) {
  let max = level
  let arr = this
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      const subLevel = item.getLevel(level + 1)
      max = Math.max(subLevel, max)
    }
  })
  return max
}

Array.prototype.getLevel = function (level = 1) {
  let max = level
  let arr = this
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      max = Math.max(max, item.getLevel(level + 1))
    }
  })
  return max
}

const level = [1, [2, [3, [4, [5]]]]]
console.log('level', level.getLevel()) // level 5
