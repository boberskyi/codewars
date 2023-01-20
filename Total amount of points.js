const points = games => {
  let count = 0;
  games.map(el => (el[0] > el[2]) ? count += 3 : (el[0] === el[2]) ? count += 1 : count += 0);
  return count;
}