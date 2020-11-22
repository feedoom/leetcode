/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (61.44%)
 * Likes:    305
 * Dislikes: 0
 * Total Accepted:    174.7K
 * Total Submissions: 277.5K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 示例 1:
 *
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 * 说明:
 * 你可以假设字符串只包含小写字母。
 *
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 *
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    let map = new Map();
    s.split('').forEach(item => {
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    })
    t.split('').forEach(item => {
        map.set(item, map.has(item) ? map.get(item) - 1 : 1);
    })
    return [...map.values()].every(item => item ===0)
};
// @lc code=end

