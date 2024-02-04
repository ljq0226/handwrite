const RedEnvelopes = (monoy,number)=>{

  const nums = new Array(number).fill(1)
  monoy = monoy-number
  while(monoy--){
    const random = Math.floor(Math.random()*number)
    nums[random] = nums[random]+1
  }
  return nums
}

const res = RedEnvelopes(100,20)
console.log('res',res)
// console.log('res',res.reduce((pre,cur)=>pre+cur))
