const obj = {
  value: 1,
  children: [
    {
      value: 11,
      children: [
        {
          value: 111,
        },
        {
          value: 112,
        },
      ],
    },
    {
      value: 22,
      children: [
        {
          value: 121,
        },
      ],
    },
  ],
}


function func(data) {
  const res = []
  const path = []
  const dfs = (node) => {
    path.push(node.value)
    if (node.children && node.children.length) {
      node.children.forEach((child) => dfs(child))
    } else {
      res.push([...path])
    }
    path.pop()
  }
  dfs(data)
  return res
}

console.log(func(obj))
