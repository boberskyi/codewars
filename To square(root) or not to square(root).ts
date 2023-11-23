export const squareOrSquareRoot = (array: number[]): number[] => {
  return array.map(number => {
    if (Math.sqrt(number) % 1 !== 0) {
      return number * number;
    } else {
      return Math.sqrt(number);
    }
  });
}