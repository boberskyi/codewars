const bump = x => {
  let bumpsCount = (x.match(/n/g) || []).length;
  return bumpsCount <= 15 ? "Woohoo!" : "Car Dead";
}