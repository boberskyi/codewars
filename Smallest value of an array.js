const min = (arr, toReturn) => {
  let smallestNumber = Math.min(...arr);

  return toReturn === 'value'
    ? smallestNumber
    : arr.indexOf(smallestNumber);
}