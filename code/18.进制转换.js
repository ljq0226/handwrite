function toBase(m, n) {
  if (n < 2 || n > 9) {
    throw new Error('n must be between 2 and 9, inclusive.')
  }
  let res = ''

  function convert(num) {
    const rem = num % n
    res = (rem === 0 ? '0' : rem )+res
    if (num < n) {
      return;
    }
    convert(Math.floor(num / n));
  }
  convert(m)
  return res;
}

console.log(toBase(100, 2)); // 1100100
console.log(toBase(10, 3)); // 101
