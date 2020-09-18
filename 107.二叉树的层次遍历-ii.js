/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  const res = [];
  let queue = [root];
  while (queue.length) {
    res.unshift([]);
    const currentAllChild = [];
    while (queue.length > 0) {
      const n = queue.shift();
      res[0].push(n.val);
      if (n.left) currentAllChild.push(n.left);
      if (n.right) currentAllChild.push(n.right);
    }
    queue = [...currentAllChild];
  }
  return res;
};
// @lc code=end
