//翻转二叉树
var invertTree = function (root) {
  if (!root) return null
  const left = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(left)
  return root
}
function invertTree(root){
  
}
const invertTree = (root)=>{
  if(!root) return null
  const left = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(left)
  return root
}
//二叉树的最大深度
var maxDepth = function(root) {
  // if(!root) return 0
  // return 1+Math.max(maxDepth(root.left),maxDepth(root.right))
  
  let res = 0
  if(!root) return res
  const queue = [root]
  while(queue.length){
      res++
      const size = queue.length
      for(let i = 0;i<size;i++){
          const node = queue.shift()
          node.left&& queue.push(node.left)
          node.right&& queue.push(node.right)
      }
  }
  return res
  
}
//对称二叉树
var isSymmetric = function(root) {
  const check = (left,right)=>{
      if(!left && !right) return true
      if(left && right){
          return left.val === right.val && check(left.left,right.right) && check(left.right,right.left)
      }
      return false
  }

  if(!root) return true
  return check(root.left,root.right)
}

const symmetry = (root)=>{
  const check = (left,right)=>{
    if(!left && !right) return true
    if(left && right){
      return left.val==right.val && check(left.right,right.left) && check(left,left,right.right)
    }
  }
  if(!root) return true
  return check(root.left,root.right)
}
