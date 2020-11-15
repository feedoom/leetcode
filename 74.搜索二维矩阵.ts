/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (38.92%)
 * Likes:    274
 * Dislikes: 0
 * Total Accepted:    70K
 * Total Submissions: 178.8K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 *
 *
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：matrix = [], target = 0
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 0
 * -10^4
 *
 *
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    let left: number = 0;
    let right: number = matrix.length - 1;
    let mid: number = 0;
    while (left < right) {
        mid = (right + left >> 1) + 1;
        if(mid === left) break;
        else if(target === matrix[mid][0]) return true;
        else if (target > matrix[mid][0]) left = mid;
        else right = mid - 1;
    }
    let row: number = left;
    left = 0;
    right = matrix[row] && matrix[row].length - 1;
    while (left <= right) {
        mid = left + right >> 1;
        if (target < matrix[row][mid]) right = mid - 1;
        else if (target > matrix[row][mid]) left = mid + 1;
        else if (target === matrix[row][mid]) return true;
    }
    return false;
};
// @lc code=end

