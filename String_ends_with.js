const solution = (str, ending) => {
  if (ending.length == 0) { return true; }
  return ending == str.substr(-ending.length);
}