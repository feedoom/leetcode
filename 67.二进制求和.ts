/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (54.41%)
 * Likes:    512
 * Dislikes: 0
 * Total Accepted:    134.3K
 * Total Submissions: 247K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 *
 * 输入为 非空 字符串且只包含数字 1 和 0。
 *
 *
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 *
 *
 * 提示：
 *
 *
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 "0" ，就都不含前导零。
 *
 *
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    let carry: number = 0
    let arrA: number[] = a.split('').map(item => parseInt(item))
    let arrB: number[] = b.split('').map(item => parseInt(item))
    let res: number[] = []
    while(arrA.length > 0 || arrB.length > 0) {
        let itemA: number = arrA.pop() || 0
        let itemB: number = arrB.pop() || 0
        let val = itemA + itemB + carry
        if(val > 1) {
            carry = val >> 1
            val = val % 2
            res.unshift(val)
        } else {
            res.unshift(val)
            carry = 0
        }
    }
    if(carry > 0) res.unshift(carry)
    return res.join('')
};
// @lc code=end

