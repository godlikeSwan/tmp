function qSort (arr, o = 0) {
  if (arr.length < 2) return arr
  const less = []
  const more = []
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < arr[o]) less.push(arr[i])
    else more.push(arr[i])
  }
  return [...qSort(less), arr[o], ...qSort(more)]
}

console.log(qSort([3, 1, 5, 8, 9, 55, 34, 35, 32, 43]))
