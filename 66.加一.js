/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (45.40%)
 * Likes:    572
 * Dislikes: 0
 * Total Accepted:    219.9K
 * Total Submissions: 481.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  function carry(digits, currentIndex) {
    let currentNumStr = digits[currentIndex] + "";
    if (currentNumStr.length > 1) {
      digits[currentIndex] = 0;
      if (currentIndex == 0) {
        digits.unshift(1);
        return;
      } else {
        digits[currentIndex - 1] += 1;
      }
      carry(digits, currentIndex - 1);
    }
  }

  digits[digits.length - 1] += 1;
  carry(digits, digits.length - 1);
  return digits;
};
// @lc code=end
