const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]
let len = arr.length
// 1. Set
const arr1 = Array.from(new Set(arr))

// 2. 两层 for 循环加上 splice
function forCircle(arr) {
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        len--
        j--
      }
    }
  }
  return arr
}


//3. indexOf include filter

function IndexOfArr(arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) newArr.push(arr[i])
  }
  // for (let i = 0; i < arr.length; i++) {
  //   if (!res.includes(arr[i])) res.push(arr[i]);
  // }
  return newArr
}
function filterArr(arr){
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

//4.map 
function mapArray(arr){
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true)
      res.push(arr[i]);
    }
  }
  return res;
}
console.log('arr', IndexOfArr(arr))
