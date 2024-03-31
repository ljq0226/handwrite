//实现 add(2)(3) == 5
//add(4)(5) == 9

//我的解答
function add(x) {
  return function (y) {
    if (y) {
      return add(x + y)
    } else {
      return x
    }
  }
}
console.log(add(2)(3)) //=>返回一个[Function f] 需要在调用一次函数才正确
//面试官提示 => 还是没写出来
//正确答案
function add(x) {
  let sum = x
  const f = (y) => {
    sum += y
    return f
  }
  f.valueOf = () => {
    return sum
  }
  return f
}
console.log(add(2)(3) == 5)
console.log(
  function () {
    return 5
  }.toString() == 5
)
