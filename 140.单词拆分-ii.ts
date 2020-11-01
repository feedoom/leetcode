/*
 * @lc app=leetcode.cn id=140 lang=typescript
 *
 * [140] 单词拆分 II
 *
 * https://leetcode-cn.com/problems/word-break-ii/description/
 *
 * algorithms
 * Hard (38.62%)
 * Likes:    342
 * Dislikes: 0
 * Total Accepted:    33.8K
 * Total Submissions: 78K
 * Testcase Example:  '"catsanddog"\n["cat","cats","and","sand","dog"]'
 *
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典
 * wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。
 *
 * 说明：
 *
 *
 * 分隔时可以重复使用字典中的单词。
 * 你可以假设字典中没有重复的单词。
 *
 *
 * 示例 1：
 *
 * 输入:
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * 输出:
 * [
 * "cats and dog",
 * "cat sand dog"
 * ]
 *
 *
 * 示例 2：
 *
 * 输入:
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * 输出:
 * [
 * "pine apple pen apple",
 * "pineapple pen apple",
 * "pine applepen apple"
 * ]
 * 解释: 注意你可以重复使用字典中的单词。
 *
 *
 * 示例 3：
 *
 * 输入:
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出:
 * []
 *
 *
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): string[] {
    let res: string[][] = []
    function includes(arr: string[], sub: string): boolean {
        return arr.some(item => item === sub)
    }
    function isSub() {
        let sOnly = [...new Set(s.split(''))]
        let wordDictOnly = [...new Set(wordDict.join('').split(''))]
        return sOnly.every(item => includes(wordDictOnly, item))
    }
    function rec(start: number, path: string[]): void {
        if(start === s.length) {
            res.push(path)
            return;
        }
        for(let i = start + 1; i <= s.length; i++) {
            let sub = s.slice(start, i)
            if(includes(wordDict, sub)) {
                rec(i, path.concat([sub]))
            }
        }
    }
    if(!isSub()) return []
    rec(0, [])
    return res.map(item => item.join(' '))
};
// @lc code=end

