function eachCons(array, n) {
  const r = [];
  for (let i = 0; i <= array.length - n; i++) {
    const chunk = [];
    for (let j = i; j < i + n; j++) {
      chunk.push(array[j]);
    }
    r.push(chunk);
  }
  return r;
}