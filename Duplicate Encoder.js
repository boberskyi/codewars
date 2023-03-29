const duplicateEncode = word => word
  .toLowerCase()
  .split('')
  .map((a, i, w) => w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')')
  .join('');