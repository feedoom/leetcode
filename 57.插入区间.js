/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 *
 * https://leetcode-cn.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (37.64%)
 * Likes:    258
 * Dislikes: 0
 * Total Accepted:    39.1K
 * Total Submissions: 99.7K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
 *
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 *
 *
 *
 * 示例 1：
 *
 * 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出：[[1,5],[6,9]]
 *
 *
 * 示例 2：
 *
 * 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出：[[1,2],[3,10],[12,16]]
 * 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 *
 *
 *
 *
 * 注意：输入类型已在 2019 年 4 月 15 日更改。请重置为默认代码定义以获取新的方法签名。
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  function join(index) {
    // 合并函数
    if (index - 1 >= 0 && intervals[index][0] <= intervals[index - 1][1]) {
      // 向前合并
      let tmp = [intervals[index - 1][0], intervals[index][1]];
      if (intervals[index][1] < intervals[index - 1][1])
        tmp = intervals[index - 1];
      intervals.splice(index - 1, 2, tmp);
      join(index - 1);
    }
    if (
      index + 1 <= intervals.length - 1 &&
      intervals[index][1] >= intervals[index + 1][0]
    ) {
      // 向后合并
      let tmp = [intervals[index][0], intervals[index + 1][1]];
      if (intervals[index][1] > intervals[index + 1][1]) tmp = intervals[index];
      intervals.splice(index, 2, tmp);
      join(index);
    }
  }
  let currentindex;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[0]) {
      intervals.splice(i, 0, newInterval);
      currentindex = i;
      break;
    }
  }
  if (currentindex === undefined) {
    intervals.push(newInterval);
    currentindex = intervals.length - 1;
  }
  join(currentindex);
  return intervals;
};
// @lc code=end
