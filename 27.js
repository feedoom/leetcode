// var removeElement = function(nums, val) {
//   let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == val) {
//       nums.splice(i,1)
//       --i
//       count++
//     }
//   }
//   return count
// };
var removeElement = function(nums, val) {
  let count = 0
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      [nums[index], nums[i]] = [nums[i], nums[index]]
      index++
      count++
    }
  }
  nums.splice(0, count)
  return count
};
let arr = [0,1,2,2,3,0,4,2]
removeElement(arr, 2)
console.log(arr)

