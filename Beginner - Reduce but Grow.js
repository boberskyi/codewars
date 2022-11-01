const grow = (x) => {
  let summ = 1;

  for (let i = 0; i < x.length; i++) {
    summ *= x[i];
  }

  return summ;
}