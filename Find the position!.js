const position = letter => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return `Position of alphabet: ${alphabet.indexOf(letter.toLowerCase()) + 1}`;
}