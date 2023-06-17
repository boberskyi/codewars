const calculateAge = (fy, sy) => {
  const result = Math.abs(fy - sy);

  if (fy < sy) {
    return `You are ${result} ${result === 1 ? 'year' : 'years'} old.`;
  }

  if (fy > sy) {
    return `You will be born in ${result} ${result === 1 ? 'year' : 'years'}.`;
  }

  return 'You were born this very year!';
}