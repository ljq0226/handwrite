const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivot = right
    let pivotIndex = pivotation(arr, pivot, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}
function pivotation(arr, pivot, left, right) {
  let pivotValue = arr[pivot]
  let index = left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, index, right)
  return index
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

const quickSort2 = (arr) => {
  const len = arr.length
  if (len <= 1) return arr
  const mid = Math.floor(len / 2)
  const base = arr.splice(mid, 1)[0]
  const left = [],
    right = []
  arr.forEach((num) => {
    if (num > base) right.push(num)
    else left.push(num)
  })
  return quickSort2(left).concat(base, quickSort2(right))
}

const nums = [4, 2, 1, 5, 3]
nums.map((item, index) => {
  nums[index] = item + 1
})
console.log('nums', nums)
console.log(quickSort(nums))

console.log(quickSort2(nums))
