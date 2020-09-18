var minWindow = function(s, t) {
  let left = 0
  let right = 0
  let need = new Map()
  let str = ''
  for (let val of t) {
    need.set(val, need.has(val) ? need.get(val) + 1 : 1)
  }
  let needType = need.size
  while(right < s.length) {
    let charRight = s[right]
    if (need.has(charRight)) {
      need.set(charRight, need.get(charRight) - 1)
      if (need.get(charRight) === 0) needType--
    }
    while(needType === 0) {
      let newStr = s.substring(left, right + 1)
      if (!str || str.length > newStr.length) str = newStr
      let charLeft = s[left]
      if (need.has(charLeft)) {
        need.set(charLeft, need.get(charLeft) + 1)
        if (need.get(charLeft) === 1) needType++
      }
      left++
    }
    right++
  }
  return str
};

let s = "ADOBECODEBANC", t = "ABC"
console.log(minWindow(s, t))
