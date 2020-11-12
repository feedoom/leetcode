/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (76.93%)
 * Likes:    989
 * Dislikes: 0
 * Total Accepted:    217.4K
 * Total Submissions: 281.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 *
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 *
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    let res: number[][] = []
    function dfs(path: number[]) {
        if(path.length === nums.length) {
            res.push(path)
            return
        }
        for(let i = 0; i < nums.length; i++) {
            if(path.indexOf(nums[i]) < 0) {
                dfs(path.concat([nums[i]]))
            }
        }
    }
    dfs([])
    return res
};
// @lc code=end

