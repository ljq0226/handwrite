// 4、第一个不重复的字符
// 题目： 输入一个字符串，找到第一个不重复字符的下标

// 输入： 'abcabcde'

// 输出： 6
const str = 'abcabcde'

const findOneStr = (str)=>{
  if(!str) return -1
  const arr = str.split('')
  const map = {}
  arr.map((c,index)=>{
    if(c in map){
      map[c] = 2
    }else{
      map[c] = 1
    }
  })



  return -1

}
