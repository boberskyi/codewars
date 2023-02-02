String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map(letter => {
      if (letter.toLowerCase() === letter) {
        return letter.toUpperCase()
      } else {
        return letter.toLowerCase();
      }
    })
    .join('');
}

console.log('test'.toAlternatingCase);