// findAndCount
function findAndCount(nums, target) {
  if (target < nums[0] || target > nums[nums.length]) return 0
  let res = 1
  let index = getMid(nums, target)
  console.log('index', index)
  if (index < 0) return 0
  let [l, r] = [index - 1, index + 1]
  while (l >= 0 && nums[l--] == target) {
    res++
  }
  while (r < nums.length && nums[r++] == target) {
    res++
  }
  return res
}
function getMid(nums, target) {
  let [l, r] = [0, nums.length - 1]
  while (l < r) {
    let mid = (r - l + 1) >> 1
    if (nums[mid] == target) {
      return mid
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
}

console.log(findAndCount([1, 1, 3, 4, 4, 4, 5, 6], 1))
