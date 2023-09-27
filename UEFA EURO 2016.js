const uefaEuro2016 = (teams, scores) => {
  let str = scores[0] > scores[1] ? `${teams[0]} won!`
    : scores[0] === scores[1] ? `teams played draw.`
      : `${teams[1]} won!`

  return `At match ${teams[0]} - ${teams[1]}, ${str}`;
}