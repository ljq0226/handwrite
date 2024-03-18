/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = []
  const queue = []
  if (root) queue.push(root)
  while (queue.length) {
      let len = queue.length
      while (len--) {
          const node = queue.shift()
          if (!len) {
              res.push(node.val)
          }
          node.left && queue.push(node.left);
          node.right && queue.push(node.right);
      }
  }
  return res
};
