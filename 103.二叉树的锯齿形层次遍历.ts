/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (55.00%)
 * Likes:    308
 * Dislikes: 0
 * Total Accepted:    84.7K
 * Total Submissions: 153.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回锯齿形层序遍历如下：
 *
 *
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const bfs = (root) => {
        if(!root) return []
        let queue = [root]
        let res = []
        let flag = false
        while (queue.length) {
            let tmp = queue
            queue = []
            res.push([])
            while(tmp.length > 0) {
                const node = tmp.shift()
                res[res.length - 1].push(node.val)
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
            flag && res[res.length - 1].reverse()
            flag = !flag
        }
        return res
    }
    return bfs(root)
};
// @lc code=end

