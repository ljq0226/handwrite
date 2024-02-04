// 子数组的最大累加和问题
// 描述
// 给定一个数组arr，返回子数组的最大累加和
// 例如，arr = [1, -2, 3, 5, -2, 6, -1]，所有子数组中，[3, 5, -2, 6]可以累加出最大的和12，所以返回12.
// 题目保证没有全为负数的数据

// const findMaxSum = (arr)=>{
//   let maxSum = 0
//   let currentSum = 0

//   for(let i =0;i<arr.length;i++){
//     currentSum = Math.max(currentSum+arr[i],arr[i])
//     maxSum = Math.max(currentSum,maxSum)
//   }
//   return maxSum
// }

function findMaxSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const arr = [1, -2, 3,-2, 5, -2, 6, -1];
console.log(findMaxSum(arr)); // 输出：12

