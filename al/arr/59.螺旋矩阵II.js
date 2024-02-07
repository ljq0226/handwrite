// 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
// 示例:
// 输入: 3 输出: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = new Array(n).fill(0).map(() => new Array(n))
  let num = 1
  let [left, right, top, bottom] = [0, n - 1, 0, n - 1]
  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num
      num++
    }
    top++
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num
      num++
    }
    right--
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num
      num++
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num
      num++
    }
    left++
  }
  return matrix
}
const res = generateMatrix(3)
console.log('res', res)
