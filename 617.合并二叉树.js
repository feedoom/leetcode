/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  if (!t1 && !t2) return null;
  if (t1 && !t2) return t1;
  if (!t1 && t2) return t2;
  let p1 = t1;
  let p2 = t2;
  const dfs = (p1, p2) => {
    if (!p1 || !p2) {
      return;
    } else if (p1 && !p2) {
      return;
    }
    p1.val = p1.val + p2.val;
    if (p2.left && !p1.left) {
      p1.left = new TreeNode();
      dfs(p1.left, p2.left);
    } else {
      dfs(p1.left, p2.left);
    }
    if (p2.right && !p1.right) {
      p1.right = new TreeNode();
      dfs(p1.right, p2.right);
    } else {
      dfs(p1.right, p2.right);
    }
  };
  dfs(p1, p2);
  return t1;
};
// @lc code=end
