function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = right
    const pivotIndex = pivotation(arr, pivot, left, right)
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
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (Array.isArray(arr) && arr.length > 1 && left < right) {
    let pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivotValue = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivotValue) {
      i++;
    }
    while (arr[j] > pivotValue) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
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
console.log(quickSort(nums))

console.log(quickSort2(nums))
