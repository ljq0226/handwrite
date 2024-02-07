// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const [m, n] = [matrix.length, matrix[0].length]
  const res = []
  let [left, right, top, bottom] = [0, n - 1, 0, m - 1]
  while (res.length < m * n) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    top++
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    right--
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left])
    }
    left++
  }
  return res
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(spiralOrder(matrix))
