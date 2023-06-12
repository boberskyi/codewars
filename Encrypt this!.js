const encryptThis = text => {
  const words = text.split(' ');

  const finalStr = words.map(word => {

    let firstChar = word.charCodeAt(0);
    let lastChar = word[word.length - 1];

    if (word.length === 1) return firstChar;
    if (word.length === 2) return firstChar + word[1];
    else return firstChar + lastChar + word.substring(2, word.length - 1) + word[1];

  })

  return finalStr.join(' ');
}