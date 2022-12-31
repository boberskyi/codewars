const isPythagoreanTriple = integers => {
  let [a, b, c] = integers;
  return a ** 2 + b ** 2 == c ** 2;
};