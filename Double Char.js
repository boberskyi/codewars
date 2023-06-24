const doubleChar = str => {
  let doubledString = "";
  for (let i = 0; i < str.length; i++) {
    doubledString += str[i] + str[i];
  }
  return doubledString;
}