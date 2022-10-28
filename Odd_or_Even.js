const oddOrEven = (array) => {
  let sumNum = 0;

  for (let i = 0; i < array.length; i++) {
    sumNum += array[i];
  }

  return (sumNum % 2 !== 0) ? 'odd' : 'even';

}