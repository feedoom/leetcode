/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let flag = true;
  const dfs = (root) => {
    if (!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    if (Math.abs(left - right) > 1) flag = false;
    return Math.max(left, right) + 1;
  };
  dfs(root);
  return flag;
};
