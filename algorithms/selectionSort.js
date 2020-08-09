function selectionSort (arr) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let iMin = i
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[iMin] > arr[j]) iMin = j
    }
    [arr[i], arr[iMin]] = [arr[iMin], arr[i]]
  }
  return arr
}

console.log(selectionSort([3, 5, 2, 7, 55, 1, 3, 5, 45]))
