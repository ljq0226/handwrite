// 26-05

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

// 变体 1：无终止方法，直接调用返回结果

function sum2() {
  let args = [...arguments]

  return function next() {
    if (arguments.length === 0) {
      return args.reduce((a, b) => a + b, 0)
    }
    args = args.concat(...arguments)
    return next
  }
}

// 变体 2：隐式类型转换

function sum3() {
  let args = [...arguments]
  function add() {
    args = args.concat(...arguments)
    return add
  }

  add.valueOf = function () {
    return args.reduce((a, b) => a + b, 0)
  }

  return add
}
console.log(sum3(1)(2)(3) == 6)

// 变体 3：支持无限链式 + 最后调用 .value ()
function sum4() {
  let res = [...arguments].reduce((pre, cur) => pre + cur, 0)

  return {
    add() {
      res += [...arguments].reduce((pre, cur) => pre + cur, 0)
      return this
    },
    value() {
      return res
    },
  }
}

console.log(sum4(1).add(2).add(3).value())
