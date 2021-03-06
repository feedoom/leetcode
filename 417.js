var pacificAtlantic = function(matrix) {
  if(!matrix || !matrix[0]) {return []}
  const m = matrix.length
  const n = matrix[0].length
  const flow1 = Array.from({length: m}, () => new Array(n).fill(false))
  const flow2 = Array.from({length: m}, () => new Array(n).fill(false))

  const dfs = (r, c, flow) => {
    flow[r][c] = true
    let arr = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]]
    arr.forEach(([nr, nc]) => {
      if(
        // 在矩阵中
        nr >= 0 && nr < m &&
        nc >= 0 && nc < n &&
        // 防止死循环
        !flow[nr][nc] &&
        // 保证逆流而上
        matrix[nr][nc] >= matrix[r][c]
      ) {
        dfs(nr, nc, flow)
      }
    })
  }

  // 沿着海岸线逆流而上
  for (let r = 0; r < m; r++) {
    dfs(r, 0, flow1)
    dfs(r, n - 1, flow2)
  }
  for (let c = 0; c < n; c++) {
    dfs(0, c, flow1)
    dfs(m - 1, c, flow2)
  }

  // 收集符合要求坐标
  const res = []
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c])
      }
    }
  }
  return res
};
