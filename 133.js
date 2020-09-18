var cloneGraph = function(node) {
  // 深度优先遍历
  if (!node) return ;
  const visited = new Map()
  const dfs = (n) => {
    const nCopy = new Node(n.val)
    visited.set(n, nCopy)
    let children = (n.neighbors || [])
    children.forEach(ne => {
      if(!visited.has(ne)) {
        dfs(ne)
      }
      nCopy.neighbors.push(visited.get(ne))
    })
  }
  dfs(node)
  return visited.get(node)
};

var cloneGraph = function(node) {
  // 广度优先遍历
  if (!node) return ;
  const visited = new Map()
  visited.set(node, new Node(node.val))
  const queue = [node]

  while(queue.length) {
    const n = queue.shift()
    const children = (n.neighbors || [])
    children.forEach(child => {
      if(!visited.has(child)) {
        queue.push(child)
        visited.set(child, new Node(child.val))
      }
      visited.get(n).neighbors.push(visited.get(child))
    })
  }
  return visited.get(node)
}
