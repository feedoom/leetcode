class MinHeap {
  constructor() {
    this.heap = []
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }
  getLeftIndex(index) {
    return index * 2 + 1
  }
  getRightIndex(index) {
    return index * 2 + 2
  }
  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }
  shiftUp(index) {
    if(index === 0) return ;
    const parentIndex = this.getParentIndex(index)
    if(this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if(this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if(this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  pop() {
    if(this.size() === 1) return this.heap.shift()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return top
  }
  peek() {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
}
var mergeKLists = function(lists) {
  const res = new ListNode(0)
  let p = res
  const heap = new MinHeap()
  lists.forEach(list => {
    if(list) heap.insert(list)
  })
  while(heap.size()) {
    const n = heap.pop()
    p.next = n
    p = p.next
    if(n.next) heap.insert(n.next)
  }

  return res.next
};
