const getSize = (w, h, d) => [
  (w * h + w * d + h * d) * 2,
  w * h * d
];