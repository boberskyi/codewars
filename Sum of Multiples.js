const sumMul = (n, m) => {
  let result = 0;

  if (m <= 0) {
    return "INVALID"
  }

  for (let i = n; i < m; i += n) {
    result += i;
  }

  return result;
}