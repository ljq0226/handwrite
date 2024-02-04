const num = -12442142323.3353232

const thousandSeparator = (n) => {
  let num = n.toString()
  let [integerPart, decimal] = num.split('.')

  if (integerPart[0] === '-') {
    integerPart = integerPart.slice(1)
  }

  let res = ''
  for (let i = integerPart.length - 1, counter = 0; i >= 0; i--, counter++) {

    if (counter === 3) {
      res = ',' + res
      counter = 0
    }
    res = integerPart[i] + res
  }
  return (n < 0 ? '-' : '') + res + (decimal ? '.' + decimal : '')


}

console.log('thousandSeparator(num)',thousandSeparator(num))
