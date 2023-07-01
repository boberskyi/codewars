var SequenceSum = (function () {
  function SequenceSum() { }

  SequenceSum.showSequence = function (count) {
    let result = count < 0 ? count : 0;
    let succeedTxt = '';

    for (let i = 0; i <= count; i++) {
      result += i;
      succeedTxt += `${i}+`;
    }

    if (result === 0) {
      return `0=0`
    }
    if (result < 0) {
      return `${result}<0`
    }

    return succeedTxt.slice(0, -1) + ` = ${result}`
  };

  return SequenceSum;

})();