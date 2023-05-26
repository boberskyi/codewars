const declareWinner = (fighter1, fighter2, firstAttacker) => {
  let currentAttacker = firstAttacker;

  while (fighter1.health > 0 && fighter2.health > 0) {
    if (currentAttacker === fighter1.name) {
      fighter2.health -= fighter1.damagePerAttack;
      currentAttacker = fighter2.name;
    } else {
      fighter1.health -= fighter2.damagePerAttack;
      currentAttacker = fighter1.name;
    }
  }

  if (fighter1.health <= 0) {
    return fighter2.name;
  } else {
    return fighter1.name;
  }
}