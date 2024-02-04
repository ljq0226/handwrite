const nums = [1, 2, 3]
function sort(nums) {
  const res = []
  const path = []
  const len = nums.length
  const backtracking = (nums, len, used = []) => {
    if (path.length === len) {
      res.push([...path])
      return
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      path.push(nums[i])
      used[i] = true
      backtracking(nums, len, used)
      used[i] = false
      path.pop()
    }
  }
  backtracking(nums, len)
  return res
}
const res1 = sort(nums)
console.log('res1', res1)
const ArrPermutation = (nums) => {
  const res = []
  const path = []
  const len = nums.length
  const backtracking = (nums, len, used = []) => {
    if (path.length === len) {
      res.push([...path])
      return
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      path.push(nums[i])
      used[i] = true
      backtracking(nums, len, used)
      path.pop()
      used[i] = false
    }
  }
  backtracking(nums, len)
  return res
}

const res = ArrPermutation(nums)
console.log('res', res)

const Permutation = (n, k) => {
  const res = []
  const path = []
  const backtracking = (n, k, i) => {
    if (path.length === k) {
      res.push([...path])
      return
    }
    for (let a = i; a <= n; a++) {
      path.push(a)
      backtracking(n, k, a + 1)
      path.pop()
    }
  }
  backtracking(n, k, 1)
  return res
}

const res2 = Permutation(4, 2)
console.log('res2', res2)

// 5、字符串所有排列组合
// 题目： 输入一个字符串，打印出该字符串中，所有字符的排列组合
// 输入： 'abc'
// 输出： ['abc', 'acb', 'bca', 'bac', 'cab', 'cba']

const str = 'abc'
function StrPermutation(str) {
  let arr = str.split('')
  arr.sort((a, b) => a - b)
  const res = []
  const path = []
  const backtracking = (arr, len, used = []) => {
    if (path.length === len) {
      res.push(path.join(''))
      return
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      path.push(arr[i])
      used[i] = true
      backtracking(arr, len, used)
      used[i] = false
      path.pop()
    }
  }
  backtracking(arr, arr.length)
  return res
}

const res3 = StrPermutation(str)
console.log('res3', res3)
