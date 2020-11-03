/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 *
 * https://leetcode-cn.com/problems/top-k-frequent-words/description/
 *
 * algorithms
 * Medium (51.83%)
 * Likes:    173
 * Dislikes: 0
 * Total Accepted:    19.8K
 * Total Submissions: 38.2K
 * Testcase Example:  '["i", "love", "leetcode", "i", "love", "coding"]\n2'
 *
 * 给一非空的单词列表，返回前 k 个出现次数最多的单词。
 *
 * 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。
 *
 * 示例 1：
 *
 *
 * 输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
 * 输出: ["i", "love"]
 * 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
 * ⁠   注意，按字母顺序 "i" 在 "love" 之前。
 *
 *
 *
 *
 * 示例 2：
 *
 *
 * 输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
 * k = 4
 * 输出: ["the", "is", "sunny", "day"]
 * 解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
 * ⁠   出现次数依次为 4, 3, 2 和 1 次。
 *
 *
 *
 *
 * 注意：
 *
 *
 * 假定 k 总为有效值， 1 ≤ k ≤ 集合元素数。
 * 输入的单词均由小写字母组成。
 *
 *
 *
 *
 * 扩展练习：
 *
 *
 * 尝试以 O(n log k) 时间复杂度和 O(n) 空间复杂度解决。
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
class maxHeap {
  constructor(arr) {
    this.heap = [];
    if (arr) {
      this.init(arr);
    }
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  getRightIndex(index) {
    return index * 2 + 2;
  }
  swap(index1, index2) {
    let tmp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = tmp;
  }
  shiftDown(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);
    if (
      (this.heap[leftIndex] && this.heap[leftIndex][1] > this.heap[index][1]) ||
      (this.heap[leftIndex] &&
        this.heap[leftIndex][1] === this.heap[index][1] &&
        this.heap[leftIndex][0] < this.heap[index][0])
    ) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (
      (this.heap[rightIndex] &&
        this.heap[rightIndex][1] > this.heap[index][1]) ||
      (this.heap[rightIndex] &&
        this.heap[rightIndex][1] === this.heap[index][1] &&
        this.heap[rightIndex][0] < this.heap[index][0])
    ) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  shiftUP(index) {
    if (index === 0) return;
    let parentIndex = this.getParentIndex(index);
    if (
      this.heap[parentIndex][1] < this.heap[index][1] ||
      (this.heap[parentIndex][1] === this.heap[index][1] &&
        this.heap[parentIndex][0] > this.heap[index][0])
    ) {
      this.swap(parentIndex, index);
      this.shiftUP(parentIndex);
    }
  }
  insert(val) {
    this.heap.push(val);
    this.shiftUP(this.heap.length - 1);
  }
  pop() {
    const res = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return res;
  }
  init(arr) {
    arr.forEach((item) => {
      this.insert(item);
    });
  }
}

var topKFrequent = function (words, k) {
  let map = new Map();
  words.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });
  let heap = new maxHeap([...map]);
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(heap.pop());
  }
  return res.map((item) => item[0]);
};
// @lc code=end
