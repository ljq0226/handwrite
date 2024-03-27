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

function distributeRedEnvelope(totalMoney, totalPeople) {
  let res = [];
  
  for(let i = 0; i < totalPeople - 1; i++) {
      // 随机分配金额，注意保证每个人至少能得到0.01元
      let money = Number((Math.random() * (totalMoney - (totalPeople - i - 1) * 0.01)).toFixed(2));
      res.push(money);
      totalMoney -= money;
  }

  // 最后一个人得到剩下的所有金额
  res.push(Number(totalMoney.toFixed(2)));

  return res;
}

// 测试
console.log(distributeRedEnvelope(10, 5));
