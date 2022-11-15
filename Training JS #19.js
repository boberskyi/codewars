const alienLanguage = str => {
  return str
    .split(" ")
    .map((word) => word = word.toUpperCase())
    .map((word) => word = word.split('').slice(0, -1).join('') + word[word.length - 1].toLowerCase())
    .join(" ");
}