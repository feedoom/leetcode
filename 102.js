var levelOrder = function(root) {
  if(!root) return []
  let result = []
  let queue = [[root, 0]]
  while(queue.length) {
    const [node, level] = queue.shift()
    if(!result[level]) {
      result.push([node.val])
    } else {
      result[level].push(node.val)
    }
    if(node.left) queue.push([node.left, level + 1])
    if(node.right) queue.push([node.right, level + 1])
  }

  return result
};

var levelOrder = function(root) {
  if(!root) return []
  let queue = [root]
  let result = []
  while(queue.length) {
    let levelTotal = queue.length
    result.push([])
    while(levelTotal--) {
      const node = queue.shift()
      result[result.length - 1].push(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
  }
  return result
}
