function addStrings(num1,num2){
  let i = num1.length-1
  let j = num2.length-1
  let carry = 0
  let res = ''
  while(i>=0||j>=0||carry!==0){
    const digit1 = i>=0?+num1[i]:0
    const digit2 = j>=0?+num2[j]:0
    const sum = digit1+digit2+carry
    res = (sum%10).toString()+res
    carry = Math.floor(sum/10)
    i--
    j--
  }
  return res
}

const str1 = '134'
const str2 = '279'
console.log('addStrings(str1,str2)',addStrings(str1,str2))
