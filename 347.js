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
console.log(topKFrequent(nums,k))

