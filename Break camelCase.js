const solution = string => {
  let finalText = '';

  string.split('').map(letter => {
    letter === letter.toUpperCase()
      ? finalText += ` ${letter}`
      : finalText += letter;
  });

  return finalText;
}