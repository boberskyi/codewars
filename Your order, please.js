const order = words => {
  return words.split(' ').sort((first, second) => {
    return first.match(/\d/)[0] - second.match(/\d/)[0]
  }).join(' ');
}