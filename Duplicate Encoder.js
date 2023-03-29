const duplicateEncode = word => {

  word = word.toLowerCase();
  let charCounts = {};
  let result = "";

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
  }


  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    charCounts[char] > 1 ? result += ")" : result += "(";
  }

  return result;
}