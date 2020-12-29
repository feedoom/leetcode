/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 *
 * https://leetcode-cn.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (47.53%)
 * Likes:    317
 * Dislikes: 0
 * Total Accepted:    84.1K
 * Total Submissions: 169.4K
 * Testcase Example:  '"egg"\n"add"'
 *
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 *
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 *
 *
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入：s = "egg", t = "add"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "foo", t = "bar"
 * 输出：false
 *
 * 示例 3：
 *
 *
 * 输入：s = "paper", t = "title"
 * 输出：true
 *
 *
 *
 * 提示：
 *
 *
 * 可以假设 s 和 t 长度相同。
 *
 *
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    if (s.length < 2) return true
    let sMap = new Map<string, string>()
    let tMap = new Map<string, string>()
    for (let i = 0; i < s.length; i++) {
        if(sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) {
            return false
        } else {
            sMap.set(s[i], t[i])
        }
        if(tMap.has(t[i]) && tMap.get(t[i]) !== s[i]) {
            return false
        } else {
            tMap.set(t[i], s[i])
        }
    }
    return true
};
// @lc code=end

