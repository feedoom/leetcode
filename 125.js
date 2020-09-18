var isPalindrome = function(s) {
  let str = s.toLowerCase().replace(/[^0-9a-zA-Z]/g, '').split('')
  let firstChar
  let lastChar
  console.log(str)
  
  while(str.length > 1) {
    firstChar = str.shift()
    lastChar = str.pop()
    if (firstChar != lastChar) {
      return false
    }
  }
  return true
}
let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))

