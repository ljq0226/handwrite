let str = '[12,[3,4,[5]],[6,7],8]'
//1.JSON.parse
//2.parse string
const convert = (str) => {
  let curLevel = 0
  const map = { 0: [] }
  let num = ''
  const pushNum = () => {
    if (num !== '') {
      map[curLevel].push(Number(num))
      num = ''
    }
  }
  for (let i = 0; i < str.length; i++) {
    const c = str[i]
    if (c >= '0' && c <= '9') {
      num += c
    } else if (c == '[') {
      curLevel++
      if (!map[curLevel]) {
        map[curLevel] = []
      }
    } else if (c == ',') {
      pushNum()
    } else if (c == ']') {
      pushNum()
      map[curLevel - 1].push(map[curLevel])
      map[curLevel--] = []
    }
  }
  return map[0]
}

console.log(JSON.stringify(convert(str)))

//3. recursion
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
