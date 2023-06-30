const predictAge = (...ages) => {
  const sumOfSquaredAges = ages.reduce((sum, age) => sum + age * age, 0);
  const squareRoot = Math.sqrt(sumOfSquaredAges);
  const predictedAge = Math.floor(squareRoot / 2);

  return predictedAge;
}