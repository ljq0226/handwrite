// let nums = [8, 7, 1, 4, 3, 5]

// function quickSort3(arr, low, high) {
//   if (low < high) {
//     const pivotIndex = partition(arr, low, high);
//     quickSort3(arr, low, pivotIndex - 1);
//     quickSort3(arr, pivotIndex + 1, high);
//   }
// }

// const quickSort = (arr,low,high)=>{
//   if(low < high){
//     const pivotIndex = partition(arr,low,high)

//   }
// }

// const partition = (arr,low,high)=>{
//   const pivot = arr[high]
//   let i = low-1
//   for(let j = low;j<high;j++){
//     if(arr[j]<pivot){
//       i++
//       swap(arr,i,j)
//     }
//   }
//   swap(arr,i+1,high)
// }

// function partition(arr, low, high) {
//   const pivot = arr[high]; // 选择最后一个元素作为基准值
//   let i = low - 1;
//   for (let j = low; j < high; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       swap(arr, i, j);
//     }
//   }
//   swap(arr, i + 1, high);
//   return i + 1;
// }

// function swap(arr, i, j) {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
// const res3 = quickSort3(nums,0,nums.length-1)
// console.log('res3',res3)

// const QuickSort = (nums) => {
//   const len = nums.length
//   if (len <= 1) return nums
//   const mid = Math.floor(len / 2)
//   const base = nums.splice(mid, 1)[0]
//   const left = [],
//     right = []
//   nums.forEach((num) => {
//     if (num > base) {
//       right.push(num)
//     } else {
//       left.push(num)
//     }
//   })
//   return QuickSort(left).concat(base).concat(QuickSort(right))
// }

// const res2 = QuickSort(nums)
// console.log('res2', res2)

// const quickSort = (arr) => {
//   const swap = (arr, i, j) => {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//   }
//   const quick = (arr, left, right) => {
//     let index
//     if (left < right) {
//       index = partition(arr, left, right)
//       if (left < index - 1) {
//         quick(arr, left, index - 1)
//       }
//       if (index < right) {
//         quick(arr, index, right)
//       }
//     }
//   }
//   const partition = (arr, left, right) => {
//     let [i, j] = [left, right]
//     const base = arr[Math.floor(Math.random() * (right - left + 1) + left)]
//     while (i <= j) {
//       while (arr[i] < base) {
//         i++
//       }
//       while (arr[j] > base) {
//         j--
//       }
//       if (i <= j) {
//         swap(arr, i, j)
//         i += 1
//         j -= 1
//       }
//     }
//     return i
//   }

//   quick(arr, 0, arr.length - 1)
//   return arr
// }

// const res = quickSort(nums)
// console.log('res', res)

// let partition = (arr, left, right) => {
//   let [i, j] = [left, right]
//   const base = arr[Math.floor(Math.random() * (right - left + 1)) + left]
//   while (i <= j) {
//     while (arr[i] < base) {
//       i++
//     }
//     while (arr[j] > base) {
//       j--
//     }
//     if (i <= j) {
//       swap(arr, i, j)
//       i += 1
//       j -= 1
//     }
//   }
//   return i
// }

// let swap = (arr, i, j) => {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }

// // 测试
// let arr = [1, 3, 2, 5, 4]
// quickSort(arr)
// console.log(arr) // [1, 2, 3, 4, 5]
// // 第 2 个最大值
// console.log(arr[arr.length - 2]) // 4

// const bubbleSort = (nums) => {
//   const len = nums.length
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - i - 1; j++) {
//       if (nums[j] > nums[j + 1]) [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
//     }
//   }
//   return nums
// }
// // console.log(bubbleSort(nums))

// function selectSort(nums) {
//   const len = nums.length
//   for (let i = 0; i < len - 1; i++) {
//     let index = i
//     for (let j = i + 1; j < len; j++) {
//       if (nums[j] < nums[index]) index = j
//     }
//     if (index !== i) [nums[i], nums[index]] = [nums[index], nums[i]]
//   }
//   return nums
// }
// // console.log(selectSort(nums))

// function insertSort(nums) {
//   const len = nums.length
//   for (let i = 1; i < len; i++) {
//     let target = i
//     for (let j = i - 1; j >= 0; j--) {
//       if (nums[j] > nums[target]) {
//         ;[nums[j], nums[target]] = [nums[target], nums[j]]
//         target = j
//       } else {
//         break
//       }
//     }
//   }
//   return nums
// }

// // console.log(insertSort(nums));

// const mergeSort = (nums) => {
//   const len = nums.length
//   if (len <= 1) return nums
//   const mid = Math.floor(len / 2)
//   const left = mergeSort(nums.slice(0, mid))
//   const right = mergeSort(nums.slice(mid, len))

//   function merge(left, right) {
//     let [l, r] = [0, 0]
//     let res = []
//     while (l < left.length && r < right.length) {
//       if (left[l] < right[r]) {
//         res.push(left[l])
//         l++
//       } else {
//         res.push(right[r])
//         r++
//       }
//     }
//     return res.concat(left.slice(l)).concat(right.slice(r))
//   }

//   return merge(left, right)
// }

// // console.log(mergeSort(nums));

const quickSort2 = (nums) => {
  const len = nums.length
  if (len <= 1) return nums
  const mid = Math.floor(len / 2)
  let base = nums.splice(mid, 1)[0]
  const left = []
  const right = []
  nums.forEach((item) => {
    if (item > base) right.push(item)
    else left.push(item)
  })
  return quickSort2(left).concat(base, quickSort2(right))
}

// // const arr = [9, 5, 2, 7, 1, 8];
// // quickSort2(arr, 0, arr.length - 1);
// // console.log(arr); // 输出：[1, 2, 5, 7, 8, 9]

// const quickSort = (arr,left=0,right=arr.length-1)=>{
//   const partition = (arr,left,right)=>{
//     const pivot = arr[right]
//     let i = left-1
//     for(let j = left;j<right;j++){
//       if(arr[j]<pivot){
//         i++
//         swap(arr,i,j)
//       }
//     }
//     swap(arr,i+1,right)
//     return i+1
//   }
//   const swap = (arr,i,j)=>{
//     [arr[i],arr[j]] = [arr[j],arr[i]]
//   }
//   if(left<right){
//     const pivotIndex = partition(arr,left,right)
//     quickSort(arr,left,pivotIndex-1)
//     quickSort(arr,pivotIndex+1,right)
//   }
// }


// const quickSort = (nums) => {
//   const len = nums.length
//   if (len <= 1) return nums
//   const mid = Math.floor(len / 2)
//   const base = nums.splice(mid, 1)[0]
//   const left = []
//   const right = []
//   nums.forEach(num => {
//     if (num < base) left.push(num)
//     else right.push(num)
//   });
//   return quickSort(left).concat(base).concat(quickSort(right))
// }
// const nums = [2, 1, 6, 3, 4, 5]
// console.log('quickSort(nums)', quickSort(nums))
// // 示例

const quickSort = (nums) => {
  const len = nums.length
  if (len <= 1) return nums

  const baseIndex = Math.floor(len / 2)
  const base = nums[baseIndex]
  const left = []
  const right = []

  for (let i = 0; i < len; i++) {
    if (i === baseIndex) continue
    if (nums[i] < base) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return [...quickSort(left), base, ...quickSort(right)]
}
const arr = [5, 2, 7, 1, 9, 3]
const res = quickSort(arr)
console.log('res',res)
console.log(arr) // 输出 [1, 2, 3, 5, 7, 9]
