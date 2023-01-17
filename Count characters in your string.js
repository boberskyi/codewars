const count = string => {
  let o = {};

  string.split('').map(el => o[el] = o[el] ? o[el] + 1 : 1);

  return o;
}