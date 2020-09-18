var isPalindrome = function(x) {
  let arrold=x.toString().split('')
  let arrnew=[]
  arrold.forEach(item => {
    arrnew.unshift(item)
  })
  return x == parseInt(arrnew.join(''))
};
