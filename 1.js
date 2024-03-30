function add(x) {
  let sum = x
  const fn = (y) => {
    sum += y
    return fn
  }
  fn.valueOf = function () {
    return sum
  }
  return fn
}
console.log(add(2)(3)==5)
