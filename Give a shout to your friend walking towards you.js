const madShout = sidewalk => {
  let str = sidewalk.split('');
  let difference = str.indexOf('F') - str.indexOf('Y');
  if (difference >= 0 && difference < 3) {
    return 'Oi F!';
  }
  return O${ 'i'.repeat(Math.ceil(difference / 2)) } F!;
}