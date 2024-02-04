// // // new Promise((resolve,reject) =>{
// // //   console.log(1);
// // //   resolve();
// // //   console.log(2);
// // //   })
// // //   .then(() =>{
// // //   setTimeout(()=>{
// // //               console.log(3);
// // //           }, 0);
// // //   })
// // //   .catch(()=>{
// // //   console.log(4);
// // //   })
// // //   .then(()=>{
// // //           console.log(5);
// // //       })
// // //   console.log(6);
  
// //   const nums = [2,1,6,3,4,5,0]
// //   const partition = (nums,left,right)=>{
// //     const pivot = nums[right]
// //     let i = left
// //     for(let j = left;j<right;j++){
// //       if(nums[j]<pivot){
// //         [nums[i],nums[j]] = [nums[j],nums[i]]
// //         i++
// //       }
// //     }
// //     [nums[i],nums[right]] = [nums[right],nums[i]] 
// //     return i
// //   }
// //   const quickSort = (nums,left=0,right=nums.length-1)=>{
// //     if(left>=right) return
// //     const pivotIndex = partition(nums, left, right); // 获取基准元素的正确索引
// //     quickSort(nums, left, pivotIndex - 1); // 对基准元素左侧的子数组进行快速排序
// //     quickSort(nums, pivotIndex + 1, right); // 对基准元素右侧的子数组进行快速排序
// //     return nums;
// //   }
  
// //   // console.log('quickSort(nums)',quickSort(nums))
  


// const size = 3; // size of matrix
// console.log("The size of the matrix is:", size);
// console.log("The matrix with right diagonal matrix is:");
// for (let i = 0; i < size; i++) {
//   for (let j = 0; j < size; j++) {
//     if (i + j === size - 1) {
//       // if condition satisfies print 1
//       process.stdout.write("1 ");
//     } else {
//       process.stdout.write("0 "); // else print 0
//     }
//   }
//   console.log(); // it is used to print new line
// }
class Duijiaoxiandayin {
  constructor() {}

  print(nums, n) {
    // 处理右上角数字内容，包含对角线上的内容
    let row, col;
    for (let i = n - 1; i >= 0; i--) {
      row = 0;
      col = i;
      while (row >= 0 && row < n && col >= 0 && col < n) {
        process.stdout.write(nums[row][col] + " ");
        row++;
        col++;
      }
    }

    // 处理左下角数字内容，包含对角线上的内容
    for (let i = 1; i < n; i++) {
      row = i;
      col = 0;
      while (row >= 0 && row < n && col >= 0 && col < n) {
        process.stdout.write(nums[row][col] + " ");
        row++;
        col++;
      }
    }
  }
}

const main = new Duijiaoxiandayin();
const nums = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
main.print(nums, 4);
