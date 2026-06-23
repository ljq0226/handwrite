// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

// 示例 1：

// 输入：nums = [3,2,2,3], val = 3
// 输出：2, nums = [2,2]
// 解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 思路 1：同向双指针（你原本的思路，标准解法）原理
// 慢指针 index：指向下一个有效元素要存放的位置
// 快指针 i：遍历整个数组
// 遇到不等于 val 的元素，就放到慢指针位置，慢指针后移
// 最终慢指针的值 = 新数组长度
// 复杂度
// 时间：\(O(n)\)
// 空间：\(O(1)\)
// 特点：保留原数组元素相对顺序
var removeElement = function (nums, val) {
  let index = 0 // 慢指针：记录有效元素位置
  for (let i = 0; i < nums.length; i++) {
    // 快指针：遍历所有元素
    if (nums[i] !== val) {
      nums[index] = nums[i]
      index++
    }
  }
  return index
}

// 思路 2：左右对撞双指针（推荐，顺序可改变时最优）
// 利用题目「顺序可以改变」的条件，把待删除元素全部交换到数组尾部。
// 原理
// 左指针 left：从头部开始，找等于 val 的元素（要删掉的）
// 右指针 right：从尾部开始，找不等于 val 的元素（有效元素）
// 左找到目标、右找到有效，两者交换；然后向中间收缩
// 最终 left 就是新长度
// 优缺点
// 时间：\(O(n)\)，交换次数更少，数据量大时效率更高
// 空间：\(O(1)\)
// 缺点：破坏原有元素顺序（题目允许，所以完全可用）
// 面试加分：主动说出「利用顺序可打乱的条件，使用对撞双指针优化」

var removeElement = function (nums, val) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    // 左边遇到要删除的元素
    if (nums[left] === val) {
      // 把右侧有效元素换到左边
      nums[left] = nums[right]
      right--
    } else {
      // 左边是有效元素，继续右移
      left++
    }
  }
  return left
}

let arr = [3, 2, 2, 3]
console.log(removeElement(arr, 3)) // 2
console.log(arr) // [2,2,2,3] 前两位有效，符合题意
