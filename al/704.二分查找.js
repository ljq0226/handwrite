var search = function (nums, target) {
  let l = 0, r = nums.length - 1;
  // 区间 [l, r]
  let res = 0
  while (l < r) {
      let mid = Math.floor((l+r)/2)
      if (nums[mid] == target) {
          r = mid
          res = mid
      }else if(nums[mid] < target){
        l = mid + 1
      }else{
        r = mid - 1
      }
  }
  return res ? res : -1;
};

const nums = [1,3,4,4,4,5,6,6,9,13]
const res = search(nums,4)
console.log('res',res)
