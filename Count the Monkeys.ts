export const monkeyCount = (n: number): number[] => {
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  return numbers;
}