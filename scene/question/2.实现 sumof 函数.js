//sum(1,2).sumOf()//3
//sum(1)(2,3).sumOf()//6
//sum(1,2,3).sumOf()//6

function sum() {
  let sum = 0
  let args = [...arguments]
  add.sumOf = function () {
    console.log('sum', sum)
    return sum
  }
  function add() {
    let args1 = [...arguments]
    sum += args1.reduce((pre, cur) => pre + cur, 0)
    return add
  }
  return add(...args)
}
sum(1, 2).sumOf() //3
sum(1)(2, 3).sumOf() //6
sum(1, 2, 3).sumOf() //6
