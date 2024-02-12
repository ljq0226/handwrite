function myFlat(arr, deep = 10) {
  if (deep == 0) return arr
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return [...pre, ...myFlat(cur, deep - 1)]
    } else {
      return [...pre, cur]
    }
  }, [])
}
const res = myFlat([1, 2, 3, [4, [5, [6]]]])
console.log('res', res)
// Array.prototype.getLevel()
Array.prototype.getLevel = function(level=1){
  let max = level
  let arr = this
  arr.forEach((item)=>{
    if(Array.isArray(item)){
      const subLevel = item.getLevel(level+1)
      max = Math.max(subLevel,max)
    }
  })
  return max
  
}
const level = [1, [2, [3, [4, [5]]]]];
console.log('level', level.getLevel()); // level 5
