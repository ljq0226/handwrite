const search = (arr, target) => {
  const len = arr.length
  if (!len) return -1
  let [l, r] = [0, len - 1]
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    const num = arr[mid]
    if (target === num) {
      return mid
    } else if (num < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
}
const nums = [1, 3, 4, 4, 4, 5, 6, 6, 9, 13]
const res = search(nums, 6)
console.log('res', res)
