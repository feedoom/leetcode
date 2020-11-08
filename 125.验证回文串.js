/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (46.36%)
 * Likes:    288
 * Dislikes: 0
 * Total Accepted:    175.1K
 * Total Submissions: 376.1K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 *
 * 示例 1:
 *
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "race a car"
 * 输出: false
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s
    .toLowerCase()
    .replace(/[^0-9a-zA-Z]/g, "")
    .split("");
  let firstChar;
  let lastChar;
  while (str.length > 1) {
    firstChar = str.shift();
    lastChar = str.pop();
    if (firstChar != lastChar) {
      return false;
    }
  }
  return true;
};
// @lc code=end
