var levelOrder = function (root) {
  const queue = []
  const res = []
  if (root) queue.push(root)
  while (queue.length) {
    let len = queue.length
    const curLevel = []
    while (len--) {
      const node = queue.shift()
      curLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(curLevel)
  }
  return res
}

function bfs(root) {
  const res = []
  const queue = []
  if (root) queue.push(root)
  while (queue.length) {
    let len = queue.length
    const curLevel = []
    while(len--){
      const node = queue.shift()
      curLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(curLevel)
  }
  return res
}
