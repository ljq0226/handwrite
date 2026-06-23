// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // 空矩阵异常处理
  if (matrix.length === 0 || matrix[0].length === 0) return []

  const m = matrix.length // 总行数
  const n = matrix[0].length // 总列数
  const res = []

  // 定义四个边界：左、右、上、下
  let left = 0
  let right = n - 1
  let top = 0
  let bottom = m - 1

  // 循环条件：边界有效（左不超右，上不超下）
  while (left <= right && top <= bottom) {
    // 1. 从左到右，遍历最顶行
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    top++ // 顶边界向下收缩

    // 2. 从上到下，遍历最右列（先校验：还有行可遍历）
    if (top <= bottom) {
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right])
      }
      right-- // 右边界向左收缩
    }

    // 3. 从右到左，遍历最底行（先校验：还有列可遍历）
    if (left <= right) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i])
      }
      bottom-- // 底边界向上收缩
    }

    // 4. 从下到上，遍历最左列（先校验：还有行可遍历）
    if (top <= bottom) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left])
      }
      left++ // 左边界向右收缩
    }
  }

  return res
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

var generateMatrix = function (n) {
  const res = new Array(n).fill(0).map(() => new Array(n))
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1
  let num = 1

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) res[top][i] = num++
    top++
    for (let i = top; i <= bottom; i++) res[i][right] = num++
    right--
    for (let i = right; i >= left; i--) res[bottom][i] = num++
    bottom--
    for (let i = bottom; i >= top; i--) res[i][left] = num++
    left++
  }
  return res
}

console.log('generateMatrix(matrix)', JSON.stringify(generateMatrix(matrix)))
