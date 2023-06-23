const solution = digits => {
  let greatestSequence = 0;
  for (let i = 0; i <= digits.length - 5; i++) {
    let sequence = parseInt(digits.slice(i, i + 5));
    if (sequence > greatestSequence) {
      greatestSequence = sequence;
    }
  }
  return greatestSequence;
}