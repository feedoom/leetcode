var maxDepth = function(root) {
  let result = 0
  const dfs = (node, level) => {
    if(!n) {return ;}
    if(!node.left && !node.right) result = Math.max(result, level)
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
  dfs(root, 1)

  return result
}
