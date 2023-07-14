const digitalRoot = n => {
  while (n > 9) {
    n = n.toString().split('').reduce((a, b) => a + Number(b), 0);
  }

  return n;
}