var inorderTraversal = function(root) {
  const result = []
  const rec = (n) => {
    if(!n) return ;
    rec(n.left)
    result.push(n.val)
    rec(n.right)
  }
  rec(root)

  return result
};

// 非递归
var inorderTraversal = function(root) {
  const res = []
  const stack = []
  let p = root
  while (stack.length || p) {
    while(p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    res.push(n.val)
    p = n.right
  }

  return res
}
