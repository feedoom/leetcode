var deleteDuplicates = function(head) {
  let obj = {}
  let p = head
  while(p) {
    if (obj[p.val]) {
      if (p.next) {
        p.val = p.next.val
        p.next = p.next.next
      } else {
        p = null
      }
    } else {
      obj[p.val] = true
      p = p.next
    }
  }
  return head
};

var deleteDuplicates = function(head) {
  let p = head
  while(p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head
}
