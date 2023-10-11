const isVow = a => {
  const vowelCodes = [97, 101, 105, 111, 117];

  return a.map(num => vowelCodes.includes(num) ? String.fromCharCode(num) : num)
}