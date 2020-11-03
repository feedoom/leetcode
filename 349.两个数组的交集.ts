/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (70.72%)
 * Likes:    285
 * Dislikes: 0
 * Total Accepted:    136.7K
 * Total Submissions: 186.8K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 *
 * 示例 2：
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 *
 *
 *
 * 说明：
 *
 *
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 *
 *
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
    if(nums1.length === 0 && nums2.length === 0) return []
    let map = new Map()
    let arr: number[] = [...[...new Set(nums1)], ...[...new Set(nums2)]]
    arr.forEach(item => {
        if(map.has(item)) {
            map.set(item, 2)
        } else {
            map.set(item, 1)
        }
    })
    return [...map].filter(item => item[1] > 1).map(item => item[0])
};
// @lc code=end

