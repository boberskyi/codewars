const sumArray = array => {
  if (!Array.isArray(array) || array.length <= 2) {
    return 0;
  }

  const sortedArr = array.slice().sort((a, b) => a - b);
  const sum = sortedArr.slice(1, sortedArr.length - 1).reduce((acc, curr) => acc + curr, 0);

  return sum;
}