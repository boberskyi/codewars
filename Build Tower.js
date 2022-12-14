const towerBuilder = nFloors => {
  let tower = [];
  let star = [];
  let space = [];

  for (let i = 1; i <= nFloors; i++) {
    space = ' '.repeat(nFloors - i);
    star = '*'.repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }

  return tower;
}