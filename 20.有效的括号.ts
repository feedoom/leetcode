/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (43.03%)
 * Likes:    1955
 * Dislikes: 0
 * Total Accepted:    449.7K
 * Total Submissions: 1M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */

// @lc code=start
function isValid(s: string): boolean {
    if(s.length % 2 > 0) return false
    let map = new Map()
    map.set('{', '}')
    map.set('[', ']')
    map.set('(', ')')
    let stack: string[] = []
    let arrS: string[] = s.split('')
    while(arrS.length > 0) {
        if(stack.length === 0) {
            stack.push(arrS.shift()!)
        } else {
            if(map.get(stack[stack.length - 1]) === arrS[0]) {
                stack.pop()
                arrS.shift()
            } else {
                stack.push(arrS.shift()!)
            }
        }
    }
    return stack.length > 0 ? false : true
};
// @lc code=end

