const deleteNth = (arr, num) => {
  let cache = {};
  return arr.filter(n => {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= num;
  });
}