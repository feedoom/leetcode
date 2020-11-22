/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (62.31%)
 * Likes:    866
 * Dislikes: 0
 * Total Accepted:    274.2K
 * Total Submissions: 432.1K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明:
 *
 *
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    function swap(index: number): void {
        for(let i = index + 1; i < nums.length; i++) {
            if(nums[i] !== 0) {
                [nums[index], nums[i]] = [nums[i], nums[index]]
                return;
            }
        }
    }
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) swap(i)
    }
};
// @lc code=end

