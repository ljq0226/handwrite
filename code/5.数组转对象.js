const arr = [
  { node: 'a', children: ['b', 'c'] },
  { node: 'd', children: ['a'] },
  { node: 'b', children: ['e', 'i'] },
  { node: 'c', children: ['f'] },
  { node: 'f', children: ['g'] },
  { node: 'e', children: ['h'] },
]
const array2Tree = (arr) => {
  const res = {}
  const temp = {}
  const childrenArr = []
  for (const item of arr) {
    const { node, children } = item
    childrenArr.push(...children)
    temp[node] = {}
    children.forEach((child) => (temp[node][child] = null))
  }
  for (const key in temp) {
    const isRoot = !childrenArr.includes(key)
    if (isRoot) res[key] = temp[key]
    for (const i in temp[key]) {
      temp[key][i] = temp[i] || null
    }
  }
  return res
}
//==>
// {
//   d: {
//     a: {
//       b: {
//         e: {
//           h: null
//         },
//         i: null
//       },
//       c: {
//         f: {
//           g: null
//         }
//       }
//     }
//   }
// }

console.log(JSON.stringify(array2Tree(arr), null, 2))

// 给你一个对象{'a':1,'b.c.d':2,'b.c.e':3}，实现一个函数把它展开成{'a':1,'b':{'c':{'d':2,'e':3}}}这种形式。
const obj = { a: 1, 'b.c.d': 2, 'b.c.e': 3 }
function flattenObject(obj) {
  const res = {}
  for (const key in obj) {
    const value = obj[key]
    const parts = key.split('.')
    let current = res
    if (parts.length == 1) {
      current[parts[0]] = value
    } else {
      for (const part of parts.slice(0, -1)) {
        current = current[part] = current[part] || {}
      }
      current[parts.pop()] = value
    }
  }
  return res
}
console.log(JSON.stringify(flattenObject(obj), null, 2))

//

const dataSource = [
  { value: 1, id: 'a' },
  { value: 2, id: 'b' },
  { value: 4, id: 'b' },
  { value: 14, id: 'v' },
  { value: 5, id: 'd' },
  { value: 2, id: 'd' },
  { value: 11, id: 'a' },
  { value: 54, id: 'c' },
  { value: 12, id: 'a' },
  { value: 13, id: 'a' },
]
const transArr = (data) => {
  data.sort((a, b) => a.value - b.value)
  const map = {}
  const res = []
  data.forEach((item) => {
    const { value, id } = item
    if (map[id]) {
      map[id].push({ value, id })
    } else {
      map[id] = [{ value, id }]
      res.push(map[id])
    }
  })
  return res
}

console.log(transArr(dataSource))
