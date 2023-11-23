export const findMultiples = (integer: number, limit: number): number[] => {
  let arr: number[] = [];

  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
  }

  return arr;
}