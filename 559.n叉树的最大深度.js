/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  let depthArr = [];
  if (!root) return 0;
  const dfs = (root, depth) => {
    if (root.children.length < 1) depthArr.push(depth);
    for (let i = 0; i < root.children.length; i++) {
      dfs(root.children[i], depth + 1);
    }
  };
  dfs(root, 1);
  return depthArr.sort((a, b) => b - a)[0];
};
// @lc code=end
