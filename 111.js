var minDepth = function(root) {
  if (!root) {return 0;}
  let queue = [[root, 1]]
  while(queue.length) {
    let [n, level] = queue.shift()
    if (!n.left && !n.right) {
      return level
    }
    if(n.left) queue.push([n.left, level + 1])
    if(n.right) queue.push([n.right, level + 1])
}
  return 0
}
