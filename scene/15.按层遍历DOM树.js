// html模板在附件的图里
{
  /* <div id="root">
        <p>p1</p>
        <span>
          span1
          <span>span2</span>
        </span>
        <p>p2</p>
        <span>
          span3
          <span>span4</span>
        </span>
</div> */
}
let str = `
        <p>p1</p>
        <span>
          span1
          <span>span2</span>
        </span>
        <p>p2</p>
        <span>
          span3
          <span>span4</span>
        </span>
`
const element = document.createElement('')
element.id = 'root'
element.innerHTML = str
console.log('element', element)
traverse(document.querySelector('#root'))
// 结果用console.log()进行输出
// 上述表达式的输出结果为
// ['DIV']
// ['P', 'SPAN', 'P', 'SPAN']
// ['SPAN', 'SPAN']
function traverse(elRoot) {
  // 补充实现
  const res = []
  const queue = [elRoot]
  while (queue.length) {
    let length = queue.length
    const curLevel = []
    for (let i = 0; i < length; i++) {
      const element = queue.shift()
      if (element?.childNodes.length) {
        queue.push(...element?.childNodes)
      }
      element.nodeName != '#text' && curLevel.push(element.nodeName)
    }
    res.push(curLevel)
  }
  return res
}
