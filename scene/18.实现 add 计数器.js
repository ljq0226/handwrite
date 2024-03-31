/**
 *计数器
 *@param initValue初始值
 *@param step步长
 */
//  function counter (initValue, step){ 补充函数... }
//  const c = counter(4, 2);
//  c.add() // 6
//  c.sub() // 4
//  c.add() // 6
//  c.add() // 8

function counter(initValue, step) {
  let value = initValue
  const add = () => {
    value += step
    console.log('value', value)
    return value
  }
  const sub = () => {
    value -= step
    console.log('value', value)
    return value
  }
  return {
    add,
    sub,
  }
}

const c = counter(4, 2)
c.add() // 6
c.sub() // 4
c.add() // 6
c.add() // 8
