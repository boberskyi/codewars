const getCount = str => {
  let counter = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let strArr = str.split('');

  strArr.forEach(el => {
    for (let i = 0; i < vowels.length; i++) {
      if (el === vowels[i]) {
        counter++;
      }
    }
  })

  return counter;
}