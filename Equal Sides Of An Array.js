const findEvenIndex = arr => {
  let left = 0,
    right = arr.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < arr.length; i++) {

    if (i > 0) {
      left += arr[i - 1];
    }

    right -= arr[i];

    if (left === right) return i;

  }

  return -1;
}