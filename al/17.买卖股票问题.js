// 17、买卖股票问题
// 题目： 给定一个整数数组，其中第  i  个元素代表了第  i天的股票价格；
// 非负整数  fee 代表了交易股票的手续费用，求返回获得利润的最大值
// 输入： arr: [1, 12, 13, 9, 15, 8, 6, 16]； fee: 2
// 输出： 22

const BuyStock = (list,fee)=>{
  let sum = 0
  let min = list[0]

  for(let i = 1;i < list.length; i++){
    if(list[i]<min){
      min = list[i]
    }else{
      let temp = list[i] - min - fee
      if(temp>0){
        sum+=temp
        min = list[i]-fee
      }
    }
  }


  return sum 
}


function buyStock(list, fee) {
  // min为当前的最小值，即买入点
  let min = list[0],
    sum = 0;
  for (let i = 1; i < list.length; i++) {
    // 从1开始，依次判断
    if (list[i] < min) {
      // 寻找数组的最小值
      min = list[i];
    } else {
      // 计算如果当天卖出是否赚钱
      let temp = list[i] - min - fee;
      if (temp > 0) {
        // 赚钱 存数据
        sum += temp;
        // 关键代码：重新计算min，分两种情况，如果后面继续涨，则默认继续持有；若后面跌，则以后面的价格重新买入
        min = list[i] - fee;
      }
    }
  }
  return sum;
}
