const betterThanAverage = (classPoints, yourPoints) => {
  let classPointsAvarage = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  return classPointsAvarage < yourPoints ? true : false;
}