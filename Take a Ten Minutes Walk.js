function isValidWalk(walk) {
  if (walk.length != 10) return false;

  const counts = {
    n: 0,
    e: 0,
    s: 0,
    w: 0
  };

  for (let i = 0; i < walk.length; i++) {
    const direction = walk[i];
    counts[direction]++;
  }

  if (counts.n - counts.s == 0 && counts.w - counts.e == 0) {
    return true;
  } else {
    return false;
  }
}

function isValidWalk(walk) {
  if (walk.length != 10) return false;

  return walk.reduce((counts, direction, index) => {
    counts[direction]++;
    if (index < walk.length - 1) {
      return counts;
    } else if (counts.n - counts.s == 0 && counts.w - counts.e == 0) {
      return true;
    } else {
      return false;
    }
  }, {
    n: 0,
    e: 0,
    s: 0,
    w: 0
  });
}