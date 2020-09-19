/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let queue = [];
  x = x + "";
  for (let i = 0; i < x.length; i++) {
    queue.push(x.charAt(i));
  }
  while (queue.length > 1) {
    if (queue.shift() != queue.pop()) return false;
  }
  return true;
};
// @lc code=end
