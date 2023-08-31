const mxdiflg = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  const maxA1 = Math.max(...a1.map(str => str.length));
  const minA1 = Math.min(...a1.map(str => str.length));
  const maxA2 = Math.max(...a2.map(str => str.length));
  const minA2 = Math.min(...a2.map(str => str.length));

  return Math.max(maxA1 - minA2, maxA2 - minA1);
}