// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。
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
 * @param {number} targetsum
 * @return {number[][]}
 */
var pathSum = function (root, targetsum) {
  const res = [];
  const travelsal = (node, cnt, path) => {
      // 遇到了叶子节点且找到了和为sum的路径
      if (cnt === 0 && !node.left && !node.right) {
          res.push([...path]); // 不能写res.push(path), 要深拷贝
          return;
      }
      if (!node.left && !node.right) return; // 遇到叶子节点而没有找到合适的边，直接返回
      // 左 （空节点不遍历）
      if (node.left) {
          path.push(node.left.val);
          travelsal(node.left, cnt - node.left.val, path); // 递归
          path.pop(); // 回溯
      }
      // 右 （空节点不遍历）
      if (node.right) {
          path.push(node.right.val);
          travelsal(node.right, cnt - node.right.val, path); // 递归
          path.pop(); // 回溯
      }
      return;
  };
  if (!root) return res;
  travelsal(root, targetsum - root.val, [root.val]); // 把根节点放进路径
  return res;


};
