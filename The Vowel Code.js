const encode = string => string.replace(/[aeiou]/g, (x) => '_aeiou'.indexOf(x));
const decode = string => string.replace(/[1-5]/g, (x) => '_aeiou'.charAt(x));