let strs = ["flower","flow","flight"]
 
var longestCommonPrefix = function(strs) {
  strs.sort((a, b) => a.length - b.length)
  let firstStr = strs.shift()

  let str = ''
  let flag = false
  for(let i = 0; i < firstStr.length; i++) {
    flag = strs.every(item => {
      return item[i] == firstStr[i]
    })
    if (flag) {
      str += firstStr.charAt(i)
    } else {
      return str
    }

  }
  return str
}

console.log(longestCommonPrefix(strs))

