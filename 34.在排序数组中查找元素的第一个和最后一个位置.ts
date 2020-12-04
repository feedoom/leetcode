/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (40.36%)
 * Likes:    756
 * Dislikes: 0
 * Total Accepted:    185.4K
 * Total Submissions: 442.3K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 *
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 *
 * 进阶：
 *
 *
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 *
 * 示例 2：
 *
 *
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 *
 * 示例 3：
 *
 *
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^9 
 * nums 是一个非递减数组
 * -10^9 
 *
 *
 */

// @lc code=start
function twoSearch(arr: number[], target: number, isLower: boolean): number {
  let left: number = 0;
  let right: number = arr.length - 1
  let res: number = arr.length
  while(left <= right) {
    const mid = Math.floor((left + right) / 2)
    if(arr[mid] > target || (isLower && arr[mid] >= target)) {
      right = mid - 1
      res = mid
    } else {
      left = mid + 1
    }
  }
  return res
}

function searchRange(nums: number[], target: number): number[] {
    if(nums.length === 0) return [-1, -1]
    let start = twoSearch(nums, target, true)
    let end = twoSearch(nums, target, false) - 1
    if(start <= nums.length && end <= nums.length && start <= end) {
        return [start, end]
    }
    return [-1, -1]
};
// @lc code=end

