const isPangram = string => {
  let s = string.toLowerCase();
  s = s.split('').filter((st) => {
    return /[a-z]/g.test(st);
  });

  s = s.join('');

  let mySet = new Set(s);

  return (mySet.size == 26);
}