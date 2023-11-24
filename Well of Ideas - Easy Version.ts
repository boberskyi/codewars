export const well = (words: string[]): string => {
  const goodCount: number = words.filter(word => word === 'good').length;

  return goodCount === 0
    ? 'Fail!'
    : goodCount <= 2
      ? 'Publish!'
      : 'I smell a series!';
};