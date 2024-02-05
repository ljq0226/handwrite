const vDom = {
  tag: 'DIV',
  attrs: {
    id: 'app',
  },
  children: [
    {
      tag: 'SPAN',
      children: [{ tag: 'A', children: [] }],
    },
    {
      tag: 'SPAN',
      children: [{ tag: 'A', children: [123] }, { tag: 'A', children: [456] }, 789],
    },
  ],
}
function render(vNode) {
  // 递归终止条件
  if (typeof vNode === 'number') return document.createTextNode(String(vNode))
  if (typeof vNode === 'string') return document.createTextNode(vNode)

  const { tag, attrs = {}, children = [] } = vNode
  const dom = document.createElement(tag)

  Object.keys(attrs).forEach((attr) => {
    dom.setAttribute(attr, attrs[attr])
  })

  children.forEach((child) => {
    dom.append(render(child))
  })

  return dom
}

const dom = render(vDom)
console.log('dom',dom)
