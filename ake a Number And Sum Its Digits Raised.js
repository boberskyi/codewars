const sumDigPow = (a, b) => {
  let result = [];

  for (let i = a; i <= b; i++) {
    let sum = 0;

    for (let j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j + 1);
      if (sum == i) result.push(i);
    }
  }

  return result;
}
