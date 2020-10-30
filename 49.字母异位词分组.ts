/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (63.56%)
 * Likes:    503
 * Dislikes: 0
 * Total Accepted:    115.9K
 * Total Submissions: 181.3K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 *
 * 示例:
 *
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 *
 * 说明：
 *
 *
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 *
 *
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    let res: string[][] = []
    function isEqual (s1: string, s2: string) :boolean {
        if(s1.length !== s2.length) return false
        if(s1 === s2) return true
        const map = new Map()
        for (let i = 0; i < s1.length; i++) {
            if(map.has(s1[i])) {
                map.set(s1[i], map.get(s1[i]) + 1)
            } else {
                map.set(s1[i], 1)
            }
        }
        if (s2.length <= 0) return false
        for(let i = 0; i < s2.length; i++) {
            if (!map.has(s2[i])) {
                return false
            } else {
                map.set(s2[i], map.get(s2[i]) - 1)
            }
        }
        return [...map.values()].every(item => item === 0)
    }
    while(strs.length > 0) {
        let arr: string[] = []
        let str = strs.pop()
        arr.push(str as string)
        for(let i = 0; i < strs.length; i++) {
            if(isEqual(str as string, strs[i] as string)) {
                arr.push(strs[i] as string)
                strs.splice(i, 1)
                i = i -1
            }
        }
        res.push(arr)
    }
    return res
};
// @lc code=end

