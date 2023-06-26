const inAscOrder = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i], arr[i + 1])
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true;
}