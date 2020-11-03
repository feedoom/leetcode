/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 *
 * https://leetcode-cn.com/problems/valid-mountain-array/description/
 *
 * algorithms
 * Easy (35.96%)
 * Likes:    111
 * Dislikes: 0
 * Total Accepted:    48.3K
 * Total Submissions: 123.6K
 * Testcase Example:  '[2,1]'
 *
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
 *
 * 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：
 *
 *
 * A.length >= 3
 * 在 0 < i < A.length - 1 条件下，存在 i 使得：
 *
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入：[2,1]
 * 输出：false
 *
 *
 * 示例 2：
 *
 * 输入：[3,5,5]
 * 输出：false
 *
 *
 * 示例 3：
 *
 * 输入：[0,3,2,1]
 * 输出：true
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= A.length <= 10000
 * 0 <= A[i] <= 10000
 *
 *
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  if (A.length < 3) return false;
  let maxIndex = A.indexOf(
    Array.prototype.slice.call(A).sort((a, b) => b - a)[0]
  );
  let leftA = A.slice(0, maxIndex);
  let rightA = A.slice(maxIndex + 1);
  if (leftA.length === 0 || rightA.length === 0) return false;
  let max = A[maxIndex];
  let flag = rightA.every((item) => {
    let res = max > item;
    max = item;
    return res;
  });
  if (!flag) return false;
  max = A[maxIndex];
  flag = leftA.reverse().every((item) => {
    let res = max > item;
    max = item;
    return res;
  });
  console.log(flag);
  if (!flag) return false;
  return true;
};
// @lc code=end
