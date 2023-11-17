const maxRot = n => {
  let numStr = String(n);
  let rotations = [numStr];

  for (let i = 0; i < numStr.length - 1; i++) {
    numStr = numStr.slice(0, i) + numStr.slice(i + 1) + numStr[i];
    rotations.push(numStr);
  }

  let maxRotatedNumber = Math.max(...rotations.map(Number));

  return maxRotatedNumber;
}