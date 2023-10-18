const f = n => {
  if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
    return false;
  }

  return (n * (n + 1)) / 2;
}