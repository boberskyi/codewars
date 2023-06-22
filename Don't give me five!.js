const dontGiveMeFive = (start, end) => {
  let counter = 0;

  for (start; start <= end; start++) {
    start.toString().indexOf('5') == -1 && counter++;
  }


  return counter;
}