const nbMonths = (startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) => {
  let months = 0;
  let currentPriceOld = startPriceOld;
  let currentPriceNew = startPriceNew;

  while (currentPriceOld + savingperMonth * months < currentPriceNew) {
    months++;
    if (months % 2 === 0) {
      percentLossByMonth += 0.5;
    }
    currentPriceOld *= (1 - percentLossByMonth / 100);
    currentPriceNew *= (1 - percentLossByMonth / 100);
  }

  const remainingMoney = currentPriceOld + savingperMonth * months - currentPriceNew;

  return [months, Math.round(remainingMoney)];
}