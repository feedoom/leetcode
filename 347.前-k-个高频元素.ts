/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 *
 * https://leetcode-cn.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (61.67%)
 * Likes:    557
 * Dislikes: 0
 * Total Accepted:    113.9K
 * Total Submissions: 184.4K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 *
 *
 *
 * 示例 1:
 *
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 *
 *
 * 示例 2:
 *
 * 输入: nums = [1], k = 1
 * 输出: [1]
 *
 *
 *
 * 提示：
 *
 *
 * 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 * 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
 * 你可以按任意顺序返回答案。
 *
 *
 */

// @lc code=start
interface heapItem {
    val: number
    count: number
}
class MinHeap {
    heap: heapItem[]
    constructor() {
        this.heap = []
    }
    getParentIndex(index: number): number {
        return (index - 1) >> 1
    }
    getLeftIndex(index: number): number {
        return index * 2 + 1
    }
    getRightIndex(index: number): number {
        return index * 2 + 2
    }
    swap(index1: number, index2: number): void {
        let tmp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = tmp
    }
    shiftUp(index: number): void {
        if (index === 0) return;
        let parentIndex: number = this.getParentIndex(index)
        if ((this.heap[parentIndex]!).count > (this.heap[index]!).count) {
            this.swap(index, parentIndex)
            this.shiftUp(parentIndex)
        }
    }
    shiftDown(index: number): void {
        let leftIndex: number = this.getLeftIndex(index)
        let rightIndex: number = this.getRightIndex(index)
        if (this.heap[leftIndex] && this.heap[leftIndex].count < this.heap[index].count) {
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }
        if (this.heap[rightIndex] && this.heap[rightIndex].count < this.heap[index].count) {
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }
    insert(value: heapItem): void {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }
    pop(): heapItem {
        let res: heapItem = this.heap[0] as heapItem
        this.heap[0] = this.heap.pop() as heapItem
        this.shiftDown(0)
        return res
    }
    size(): number {
        return this.heap.length
    }
    allItem(): number[] {
        return this.heap.map(item => item.val) as number[]
    }
}

function topKFrequent(nums: number[], k: number): number[] {
    let heap = new MinHeap()
    let map = new Map()
    nums.forEach(item => {
        map.set(item, map.has(item) ? map.get(item) + 1 : 1)
    })
    map.forEach((count, val) => {
        let item: heapItem = {
            val,
            count
        }
        heap.insert(item)
        if (heap.size() > k) heap.pop()
    })
    return heap.allItem()
};
// @lc code=end

