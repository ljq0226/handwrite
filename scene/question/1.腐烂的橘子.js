// 在给定的网格中，每个单元格可以有以下三个值之
// •值 0 代表空单元格；
// •值 1 代表新鲜橘子；
// •值 2 代表腐烂的橘子。
// 每分钟，任何与腐烂的橘子（在4个正方向上）相邻的新鲜橘子都会腐烂。

// 返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回-1。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const queue = []
  let unrotten = 0
  const height = grid.length
  const width = grid.length
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j])
      } else if (grid[i][j] == 1) {
        unrotten++
      }
    }
  }
  if (unrotten == 0) return 0
  let level = 0
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  while (queue.length) {
    const levelSize = queue.length
    level++
    for (let i = 0; i < levelSize; i++) {
      let cur = queue.shift()
      for (let j = 0; j < 4; j++) {
        let x = cur[0] + dx[j]
        let y = cur[1] + dy[j]
        if (x < 0 || x >= height || y < 0 || y >= width || grid[x][y] !== 1) continue
        grid[x][y] = 2
        queue.push([x, y])
        unrotten--
      }
    }
  }
  return unrotten === 0 ? level - 1 : -1
}
