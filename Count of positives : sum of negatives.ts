export const countPositivesSumNegatives = (input: any): number[] => {
  return input && input.length
    ? [
      input.filter((positive: number) => positive > 0).length,
      input
        .filter((num: number) => num < 0)
        .reduce((acc: number, cur: number) => acc + cur, 0),
    ]
    : [];
}