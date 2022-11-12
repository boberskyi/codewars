const cutIt = arr => {
  let min = Math.min.apply(Math, arr.map(str => str.length));
  return arr.map(el => el.substring(0, min));
}