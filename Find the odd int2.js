const findOdd = (A) => {
  const countMap = new Map();

  for (let num of A) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (let [key, value] of countMap) {
    if (value % 2 !== 0) {
      return key;
    }
  }
};