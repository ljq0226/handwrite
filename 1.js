let str = '[12,[3,4,[5]],6]'
const getNum = (str)=>{
  return +str.match(/\w+/g)[1]
}
const convert = (str) => {
  let numArr = str.replace(/(\[|\])/g, '').split(',')
  str
  let res = []
  // if (str[0] == '[' && str[str.length - 1] == ']') str = str.slice(1, -1)
  console.log('str', str)

  return res
}

console.log(convert(str))
