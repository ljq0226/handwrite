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
function Order(root) {
  const stack = []
  const res = []
  if (root) stack.push(root)
  while (stack.length) {
    //中左右
    const node = stack.pop()
    if (!node) {
      res.push(stack.pop().val)
    }
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
    stack.push(node)
    stack.push(null)
  }
  return res
}
