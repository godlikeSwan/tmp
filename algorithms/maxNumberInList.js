function maxNumber (list, max = list.value) {
  if (!list) return max
  if (list.value > max) return maxNumber(list.next, list.value)
  return maxNumber(list.next, max)
}

const list1 = { value: 3 }
list1.next = { value: 4 }
list1.next.next = { value: 7 }
list1.next.next.next = { value: 6 }

console.log(maxNumber(list1))
