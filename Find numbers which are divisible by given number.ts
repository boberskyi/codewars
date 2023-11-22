export const divisibleBy = (numbers: number[], divisor: number): number[] => {
  return numbers.filter(num => num % divisor === 0);
}