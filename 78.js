var subsets = function(nums) {
  const res = []
  const backtrack = (path, length, startIndex) => {
    if (path.length === length) {
      res.push(path)
      return
    }
    for (let i = startIndex; i < nums.length; i++) {
      backtrack(path.concat(nums[i]), length, i + 1)
    }

  }
  for (let i = 0; i <= nums.length; i++) {
    backtrack([], i, 0)
  }
  return res
};

let nums = [1, 2, 3]
console.log(subsets(nums))
