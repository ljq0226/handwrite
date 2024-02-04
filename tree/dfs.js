//递归 前中后序遍历
const preorderTraversal = (root) => {
  const res = []
  const dfs = (root) => {
    if (!root) return
    //中左右
    res.push(root.val)
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  return res
}
//迭代
const preorderTraversal2 = (root) => {
  const stack = []
  const res = []
  if (root) stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
    stack.push(node)
    stack.push(null)
  }
  return res
}
