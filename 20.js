let s = "{[]}"

var isValid = function(s) {
  if (s.length % 2) return false
  let obj = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  let arrS = s.split('')
  let stack = []
  let left = ''
  let right = ''

  while (arrS.length > 0) {
    right = arrS[0]
    if (stack.length == 0) {
      stack.push(right)
      arrS.shift()
      continue
    }
    left = stack[stack.length - 1]
    if (obj[left] == right) {
      stack.pop()
      arrS.shift()
      continue
    } else {
      stack.push(right)
      arrS.shift()
    }
  }
  if (stack.length == 0) {
    return true
  } else {
    return false
  }
};

var isValid1 = function(s) {
  if (s.length % 2) return false

  let map = new Map()
  map.set('{', '}')
  map.set('(', ')')
  map.set('[', ']')
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if(map.has(s[i])) {
      stack.push(s[i])
    } else {
      if (s[i] == map.get(stack[stack.length - 1])) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length == 0 ? true : false
}

console.log(isValid1(s))

