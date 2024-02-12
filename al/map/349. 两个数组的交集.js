// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
      const temp = nums1
      nums1 = nums2
      nums2 = temp
  }
  const nums1Set = new Set(nums1)
  const resSet = new Set()
  for (let i = 0; i < nums2.length; i++) {
      nums1Set.has(nums2[i]) && (resSet.add(nums2[i]))
  }
  return Array.from(resSet)
  // const res = []
  // for (let i = 0; i < nums1.length; i++) {
  //     const num1 = nums1[i]
  //     for (let j = 0; j < nums2.length; j++) {
  //         const num2 = nums2[j]
  //         num2 == num1 && (res.push(num2))
  //     }
  // }
  // return Array.from(new Set(res))
};





// 350. 两个数组的交集 II
// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = {}
  const res = []
  for(const num1 of nums1){
      if(map[num1]){
          map[num1]++
      }else{
          map[num1] = 1
      }
  }
  for(const num2 of nums2){
      const val = map[num2]
      if(val>0){
          map[num2]--
          res.push(num2)
      }
  }
  return res
};
