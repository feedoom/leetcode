var plusOne = function(digits) {
  function carry(digits, currentIndex) {
    let currentNumStr = digits[currentIndex] + ''
    if(currentNumStr.length > 1) {
      digits[currentIndex] = 0
      if (currentIndex == 0) {
        digits.unshift(1)
        return 
      } else {
        digits[currentIndex - 1] += 1
      }
      carry(digits, currentIndex - 1)
    }
  }

  digits[digits.length - 1] += 1
  carry(digits, digits.length - 1)
  return digits
}

console.log(plusOne([9]))
