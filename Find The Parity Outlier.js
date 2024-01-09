const findOutlier = integers => {
  const oddNums = [];
  const evenNums = [];

  integers.forEach(num => (num % 2 === 0 ? evenNums.push(num) : oddNums.push(num)));

  return oddNums.length > 1 ? evenNums[0] : oddNums[0];
}