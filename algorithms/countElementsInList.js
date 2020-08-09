function countElements (list, length = 0) {
  if (list && list.next) return countElements(list.next, length + 1)
  return length + 1
}

const list = { value: 5 }
list.next = { value: 3 }
list.next.next = { value: 2 }
list.next.next.next = { value: 4 }

console.log(countElements(list))
