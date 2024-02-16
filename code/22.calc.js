function calc(n) {
  let base = 2
  const res = []
  for (; base <= n; base++) {
    while (n % base == 0) {
      n = n / base
      res.push(base)
    }
  }
  return res
}
console.log(calc(8)) //[2,3,5]
