const adjacentElementsProduct = array => {
  let maxProductVal = [];

  for (let i = 0; i < array.length - 1; i++) {
    maxProductVal.push(array[i] * array[i + 1]);
  }

  return Math.max(...maxProductVal);
}