const splitAndMerge = (string, separator) => string.split(' ').map(el => el.split('').join(separator)).join(' ');