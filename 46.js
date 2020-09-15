var permute = function(nums) {
  const res = []
  const backtrack = (path) => {
    if (path.length === nums.length) {
      res.push(path)
      return ;
    }
    nums.forEach(item => {
      if (path.includes(item)) return ;
      backtrack(path.concat(item))
    })
  }
  backtrack([])
  return res
};

let nums = [1, 2, 3]
console.log(permute(nums))