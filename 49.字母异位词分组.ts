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
    const map = new Map()
    function sort(str: string): string {
        return str.split('').sort().join('')
    }
    strs.forEach(item => {
        let key = sort(item)
        let val =item
        if(map.has(key)) {
            map.set(key, (map.get(key) as string[]).concat([item]))
        } else {
            map.set(key, [val])
        }
    })
    return [...map.values()]
};;
// @lc code=end

