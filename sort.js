// let nums = [8, 7, 1, 4, 3, 5]

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

// // const arr = [9, 5, 2, 7, 1, 8];
// // quickSort2(arr, 0, arr.length - 1);
// // console.log(arr); // 输出：[1, 2, 5, 7, 8, 9]



// function quickSort(nums) {
//   const len = nums.length
//   if (len <= 1) return nums
//   const mid = Math.floor(len / 2)
//   let base = nums.splice(mid, 1)[0]
//   const [left, right] = [[], []]
//   nums.forEach((num) => {
//     if (num > base) right.push(num)
//     else left.push(num)
//   })
//   return quickSort(left).concat(base, quickSort(right))
// }

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
//   return arr
// }

// const arr = [5, 2, 7, 1, 9, 3]
// const res = quickSort(arr) 
// console.log('res', res)// 输出 [1, 2, 3, 5, 7, 9]

function quickSort(arr,left=0,right=arr.length-1){
  if(left<right){
    let pivot = right
    let pivotIndex = partition(arr,pivot,left,right)
    quickSort(arr,left,pivotIndex-1)
    quickSort(arr,pivotIndex+1,right)
  }
  return arr
}
function partition(arr,pivot,left,right){
  let pivotValue = arr[pivot]
  let index = left
  for(let i = left;i<right;i++){
    if(arr[i]<pivotValue){
      swap(arr,i,index)
      index++
    }
  }
  swap(arr,index,right)
  return index
}

// function partition(array, pivot, left, right) {
//   let pivotValue = array[pivot];
//   let partitionIndex = left;

//   for (let i = left; i < right; i++) {
//       if (array[i] < pivotValue) {
//           swap(array, i, partitionIndex);
//           partitionIndex++;
//       }
//   }
//   swap(array, right, partitionIndex);
//   return partitionIndex;
// }

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// 使用示例
const arr = [5, 3, 7, 6, 2, 9];
console.log(quickSort(arr));  // 输出：[2, 3, 5, 6, 7, 9]
