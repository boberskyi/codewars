const findOdd = A => {
  const result = A.reduce((acc, item) => {
    if (acc[item]) {
      acc[item].push(item);
    } else {
      acc[item] = [item];
    }
    return acc;
  }, {});
  return Object.values(result).filter(item => item.length % 2 !== 0)[0][0];
}