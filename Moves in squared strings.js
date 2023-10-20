const vertMirror = strng => {
  return strng
    .split('\n')
    .map(line => line.split('').reverse().join(''))
    .join('\n');
}
const horMirror = strng => {
  return strng.split('\n').reverse().join('\n');
}
const oper = (fct, s) => fct(s);