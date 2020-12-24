/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (46.99%)
 * Likes:    340
 * Dislikes: 0
 * Total Accepted:    149.8K
 * Total Submissions: 293.9K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 *
 *
 *
 * 示例：
 *
 * s = "leetcode"
 * 返回 0
 *
 * s = "loveleetcode"
 * 返回 2
 *
 *
 *
 *
 * 提示：你可以假定该字符串只包含小写字母。
 *
 */

// @lc code=start
function firstUniqChar(s: string): number {
    const map = new Map<string, number>()
    s.split('').forEach((item, index) => {
        map.set(item, map.has(item) ? map.get(item) + 1 : 1)
    })
    try {
        return s.indexOf([...map].filter(item => item[1] === 1)[0][0])
    } catch (err) {
        return -1
    }
};
// @lc code=end

