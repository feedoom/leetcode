var lengthOfLongestSubstring = function(s) {
  let left = 0
  let maxLength = 0
  let map = new Map()
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right]) && map.get(s[right]) >= left) left = map.get(s[right]) + 1
    maxLength = Math.max(maxLength, right - left + 1)
    map.set(s[right], right)
  }
  return maxLength
};

// let s = "abcabcbb"
// let s = "bbbbb"
let s = "pwwkew"
console.log(lengthOfLongestSubstring(s))
