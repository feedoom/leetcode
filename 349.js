var intersection = function(nums1, nums2) {
  return [...new Set(nums1)].filter(item => nums2.includes(item))
};

var intersection1 = function(nums1, nums2) {
  let map = new Map()
  let result = []
  nums1.forEach(item => {
    map.set(item, true)
  })
  nums2.forEach(item => {
    if (map.get(item)) {
      result.push(item)
      map.delete(item)
    }
  })

  return result
};

let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2]

console.log(intersection1(nums1, nums2))
