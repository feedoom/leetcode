var twoSum = function(nums, target) {
  let map = new Map()
  while(nums.length > 0) {
    let index = nums.length - 1
    let key = nums.pop()
    let diff = target - key
    if (map.has(diff)) {
      return [index, map.get(diff)]
    } else {
      map.set(key, index)
    }
  }
  return 'no'
}
let nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target))
