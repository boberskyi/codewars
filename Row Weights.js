const rowWeights = array => {
  let a = 0;
  let b = 0;

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      a += array[i]
    } else {
      b += array[i]
    }
  }

  return [a, b]
}