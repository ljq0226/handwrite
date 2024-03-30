// 转成驼峰

//数组方法
function toCamelCase(str) {
  let words = str.toLowerCase().split(/[-_]/)
  if (words.length == 1) {
    return str[0].toLowerCase() + str.slice(1)
  }
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }
  return words.join('')
}
//正则表达式
function toCamelCaseReg(str){
  return str.replace(/(-[a-zA-Z])|(_[a-zA-Z])/g, function(match) {
    return match[1].toUpperCase();
});
}

let str1 = 'TestVal'
let str2 = 'test-val'
let str3 = 'Test_Val'
// console.log(toCamelCase(str1))
// console.log(toCamelCase(str2))
// console.log(toCamelCase(str3))
console.log(toCamelCaseReg(str2))
console.log(toCamelCaseReg(str3))
