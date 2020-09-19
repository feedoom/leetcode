/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];
  const res = [];
  const preorder = (root) => {
    res.push(root.val);
    root.children.forEach((item) => {
      preorder(item);
    });
  };
  preorder(root);
  return res;
};
//非递归
// var preorder = function (root) {
//   if (!root) return [];
//   const res = [];
//   let stack = [root];
//   while (stack.length) {
//     const n = stack.pop();
//     res.push(n.val);
//     for (let i = n.children.length - 1; i >= 0; i--) {
//       if (n.children[i]) {
//         stack.push(n.children[i]);
//       }
//     }
//   }
//   return res;
// };
// @lc code=end
