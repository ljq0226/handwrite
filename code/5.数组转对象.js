const arr = [
  { node: 'a', children: ['b', 'c'] },
  { node: 'd', children: ['a'] },
  { node: 'b', children: ['e', 'i'] },
  { node: 'c', children: ['f'] },
  { node: 'f', children: ['g'] },
  { node: 'e', children: ['h'] },
]
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

function array2Tree(array){
  const res = {}
  const childArray = []
  const temp = {}
  array.forEach(i=>{
    childArray.push(...i.children)
    temp[i.node] = {}
    i.children.forEach(item=>temp[i.node][item]=null)
  })
  for (const key in temp) {
    const isRoot = !childArray.includes(key)
    if(isRoot) res[key] = temp[key]
    for(const i in temp[key]){
      temp[key][i] = temp[i] || null
    }
  }
  return res

}

// function array2Tree(array) {
//   const res = {}
//   const temp = {}
//   const childList = []
//   array.forEach((item) => {
//     const { node, children } = item
//     childList.push(...children)
//     temp[node] = {}
//     children.forEach((child) => (temp[node][child] = null))
//   })
//   for (const key in temp) {
//     const isRoot = !childList.includes(key)
//     isRoot && (res[key] = temp[key])
//     for (const j in temp[key]) {
//       temp[key][j] = temp[j] || null
//     }
//   }
//   return temp
// }


console.log(JSON.stringify(array2Tree(arr), null, 2))
