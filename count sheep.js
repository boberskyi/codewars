const countSheep = (num) => {
  let string = '';
  for (let i = 1; i <= num; i++) {

    string += i.toString() + ' sheep...';
  }
  return string;
}