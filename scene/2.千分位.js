const str = '10000000'
const convert = (str) => {
  const arr = str.split('').reverse()
  const len = arr.length
  let res = ''
  for (let i = 0; i < len; i++) {
    res += arr[i]
    if ((i + 1) % 3 == 0) {
      res += ','
    }
  }
  return res.split('').reverse().join('')
}
const res = convert(str)
console.log('res', res)
