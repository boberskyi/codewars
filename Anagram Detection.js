const isAnagram = (test, original) => {
  const getArr = (str) => str.toLowerCase().split('').sort().join('');

  return getArr(test) === getArr(original);
}