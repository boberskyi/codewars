const binaryPyramid = (m, n) => {
  let arrBinary = [];

  for (i = m; i <= n; i++) {
    arrBinary.push(+i.toString(2))
  }

  return arrBinary.reduce((a, b) => a + b).toString(2);
}