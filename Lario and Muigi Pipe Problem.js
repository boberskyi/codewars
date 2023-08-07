const pipeFix = numbers => {
  const minNum = Math.min(...numbers);
  const maxNum = Math.max(...numbers);
  const arr = [];

  for (let i = minNum; i <= maxNum; i++) {
    arr.push(i);
  }

  return arr;
}