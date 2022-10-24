const warnTheSheep = (queue) => {

  const wolfIndex = queue.indexOf('wolf'),
    shipIndex = queue.length - wolfIndex - 1;

  if (wolfIndex == queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  }

  return `Oi! Sheep number ${shipIndex}! You are about to be eaten by a wolf!`;

}