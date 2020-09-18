var guessNumber = function(n) {
  let low = 0
  let high = n
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let flag = guess(mid)
    if (flag == 1) {
      low = mid + 1
    } else if (flag == -1) {
      high = mid - 1
    } else {
      return mid
    }
  }
};

var guessNumber = function(n) {
  const rec = (low, high) => {
    if (low > high) return ;
    const mid = Math.floor((low + high) / 2)
    const flag = guess(mid)
    if (flag == 1) {
      return rec(mid + 1, high)
    } else if (flag == -1) {
      return rec(1, mid - 1)
    } else {
      return mid
    }
  }
  return rec(1, n)
}
