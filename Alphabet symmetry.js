const solve = arr => {
  const al = 'abcdefghijklmnopqrstuvwxyz';

  return arr.map(w => [...w.toLowerCase()].filter((char, i) => char === al[i]).length);
}