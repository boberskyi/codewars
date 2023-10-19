const productFib = prod => {
  let a = 0;
  let b = 1;

  while (a * b < prod) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return [a, b, a * b === prod];
}