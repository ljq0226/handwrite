const nums1 = [1, 2, 3, 5, 7],
  m = 3,
  nums2 = [2, 4, 5, 6],
  n = 3

//123
//246
//122
//346
const merge = (nums1, nums2) => {
  let [m, n] = [nums1.length, nums2.length]
  while (m && n) {
    nums1[m + n - 1] = nums1[m - 1] > nums2[n - 1] ? nums1[m-- - 1] : nums2[n-- - 1]
  }
  return nums1
}

merge(nums1, nums2)


//
