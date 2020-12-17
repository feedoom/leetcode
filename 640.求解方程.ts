/*
 * @lc app=leetcode.cn id=640 lang=typescript
 *
 * [640] 求解方程
 *
 * https://leetcode-cn.com/problems/solve-the-equation/description/
 *
 * algorithms
 * Medium (40.99%)
 * Likes:    59
 * Dislikes: 0
 * Total Accepted:    8K
 * Total Submissions: 19.5K
 * Testcase Example:  '"x+5-3+x=6+x-2"'
 *
 * 求解一个给定的方程，将x以字符串"x=#value"的形式返回。该方程仅包含'+'，' - '操作，变量 x 和其对应系数。
 *
 * 如果方程没有解，请返回“No solution”。
 *
 * 如果方程有无限解，则返回“Infinite solutions”。
 *
 * 如果方程中只有一个解，要保证返回值 x 是一个整数。
 *
 * 示例 1：
 *
 * 输入: "x+5-3+x=6+x-2"
 * 输出: "x=2"
 *
 *
 * 示例 2:
 *
 * 输入: "x=x"
 * 输出: "Infinite solutions"
 *
 *
 * 示例 3:
 *
 * 输入: "2x=x"
 * 输出: "x=0"
 *
 *
 * 示例 4:
 *
 * 输入: "2x+3x-6x=x+2"
 * 输出: "x=-1"
 *
 *
 * 示例 5:
 *
 * 输入: "x=x+2"
 * 输出: "No solution"
 *
 *
 */

// @lc code=start
function solveEquation(equation: string): string {
    var coeff = token => {
    if (token.length > 1 && /\d/.test(token[token.length - 2])) {
      return parseInt(token.replace('x', ''))
    }
    return parseInt(token.replace('x', '1'))
  }

  let [l, r] = equation.split('=')
  let k = 0,
    v = 0
  for (let token of l.split(/(?=[+-])/)) {
    if (token.includes('x')) {
      k += coeff(token)
    } else if (token) {
      v -= parseInt(token)
    }
  }
  for (let token of r.split(/(?=[+-])/)) {
    if (token.includes('x')) {
      k -= coeff(token)
    } else if (token) {
      v += parseInt(token)
    }
  }
  if(v===0 && k===0) {
      return "Infinite solutions"
  } else if(k === 0) {
      return "No solution"
  } else {
      return `x=${(v / k).toFixed(0)}`
  }
};
// @lc code=end

