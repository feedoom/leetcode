/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (77.99%)
 * Likes:    852
 * Dislikes: 0
 * Total Accepted:    164K
 * Total Submissions: 207.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 *
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    let res:number[][] = []
    const rec = (path: number[], length: number, index: number) => {
        if (path.length === length) {
            res.push(path)
            return
        }
        for (let i = index; i < nums.length; i++){
            rec(path.concat(nums[i]),length,i+1)
        }
    }
    for (let i: number = 0; i <= nums.length; i++){
        rec([], i, 0)
    }
    return res

};
// @lc code=end

