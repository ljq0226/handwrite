let str = '[12,[3,4,[5]],[6,7],8]'
//JSON.stringify
const convert = (str) => {
  let curLevel = 0
  const map = {}
  for (let i = 0; i < 4; i++) {
    map[i] = []
  }
  let num = ''
  for (let i = 0; i < str.length; i++) {
    const c = str[i]
    if (Number.isInteger(+c)) {
      num += c
    } else if (c == ',') {
      num !== '' && map[curLevel].push(num)
      num = ''
    } else if (c == '[') {
      curLevel++
    } else if (c == ']') {
      ;+num && map[curLevel].push(num)
      num = ''
      map[curLevel - 1].push(map[curLevel])
      map[curLevel--] = []
    }
  }
  let res = map[0]
  return res
}

console.log(JSON.stringify(convert(str)))
function strToArray(str) {
  let result = []
  let temp = ''
  let bracketCount = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[') {
      if (bracketCount > 0) temp += str[i]
      bracketCount++
    } else if (str[i] === ']') {
      bracketCount--
      if (bracketCount === 0) {
        result.push(temp[0] === '[' ? strToArray(temp) : parseInt(temp))
        temp = ''
      } else {
        temp += str[i]
      }
    } else if (str[i] === ',' && bracketCount === 1) {
      result.push(temp[0] === '[' ? strToArray(temp) : parseInt(temp))
      temp = ''
    } else if (str[i] !== ',' || bracketCount > 1) {
      temp += str[i]
    }
  }

  return result
}

let str2 = '[12,[3,4,[5]],[6,7],8]'
console.log(strToArray(str2)) // 输出：[ 12, [ 3, 4, [ 5 ] ], [ 6, 7 ], 8 ]
