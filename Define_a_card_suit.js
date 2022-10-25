const defineSuit = (card) => {
  const cardSuits = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades'
  }

  return cardSuits[card[card.length - 1]];
}