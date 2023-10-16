const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
  const blueRemaining = blueStart - bluePulled;
  const redRemaining = redStart - redPulled;
  const totalRemaining = blueRemaining + redRemaining;
  const probabilityBlue = blueRemaining / totalRemaining;

  return probabilityBlue;
}