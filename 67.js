var addBinary = function(a, b) {
  function carry(arr, currentIndex) {
    if(arr[currentIndex] > 1) {
      arr[currentIndex] -= 2
      if (currentIndex == 0) {
        arr.unshift(1)
        return 
      } else {
        arr[currentIndex - 1] += 1
      }
      carry(arr, currentIndex - 1)
    }
  }
  a = a.split('').map(item => parseInt(item))
  b = b.split('').map(item => parseInt(item))
  let arr = a.map((value, index)=> {
    return b[index] ? b[index] + value : value
  })
  console.log(arr)
  
  carry(arr, arr.length - 1)
  arr.forEach((_, index, arr)=> {
    carry(arr, index)
  })
  return arr.join('') + ''
}
console.log(addBinary('11', '1'))
