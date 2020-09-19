/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
  let res = 0;
  if (!root) return res;
  const dfs = (root) => {
    if (!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    res += Math.abs(left - right);
    return root.val + left + right;
  };
  dfs(root);
  return res;
};
// @lc code=end
