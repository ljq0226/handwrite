//Z 字行打印矩阵
function printMatrixInZOrder(matrix) {
  const rows = matrix.length
  if (!rows) return
  const cols = matrix[0].length
  let row = 0
  let col = 0
  let goingDown = false
  let res = []
  while (row < rows && col < cols) {
    res.push(matrix[row][col])
    if (goingDown) {
      //从上到下
      if (row === rows - 1) {
        //到达最后一行
        col++
        goingDown = false
      } else if (col === 0) {
        //到达第一列
        row++
        goingDown = false
      } else {
        row++
        col--
      }
    } else {
      //从下到上
      if (col === cols - 1) {
        //到达最后一列
        row++
        goingDown = true
      } else if (row === 0) {
        //到达第一行
        col++
        goingDown = true
      } else {
        col++
        row--
      }
    }
  }
  console.log('res', res)
  return res
}

// 示例用法
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
printMatrixInZOrder(matrix)

//螺旋矩阵
function spiralOrder(matrix) {
  const res = []
  if (matrix.length === 0) return res
  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1
  while (left <= right && top <= bottom) {
    //上边界
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    top++
    //右边界
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    right--
    //下边界
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    }
    bottom--
    //左边界
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left])
    }
    left++
  }
  return res
}

const result = spiralOrder(matrix)
console.log(result)
