let haystack = "mississippi", needle = "issip"
var strStr = function(haystack, needle) {
  if (needle.length == 0) return 0
  let index = 0
  let strLength = needle.length
  while (index < haystack.length) {
    if (haystack.substr(index, strLength) == needle) return index
    index++
  }
  return -1
}

console.log(strStr(haystack, needle))

