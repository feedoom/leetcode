let nums = [1,1,1,2,2,3],k =2
var topKFrequent = function(nums, k) {
  let obj={}
  nums.forEach(item => {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })
  let arr = Object.entries(obj)
  let result = []

  while (k > 0) {
    let maxIndex = 0
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][1] > arr[maxIndex][1]) {
        maxIndex = i
      }
    }
    
    result.push(parseInt(arr[maxIndex][0]))
    arr.splice(maxIndex,1)
    k--
  }

  return result
}


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
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  shiftUp(index) {
    if(index === 0) return ;
    const parentIndex = this.getParentIndex(index)
    if(this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if(this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if(this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  peek() {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
}

var topKFrequent = function(nums, k) {
  const map = new Map()
  const heap = new MinHeap()
  nums.forEach(item => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  })
  map.forEach((value, key) => {
    heap.insert({ value, key })
    if(heap.size() > k) heap.pop()
  })

  return heap.heap.map(item => item.key)
}

console.log(topKFrequent(nums,k))

