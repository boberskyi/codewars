const incrementString = (strng) => {
  return strng.replace(/\d*$/, match => {
    if (!match) return '1';
    const numStr = String(parseInt(match) + 1);
    const diff = match.length - numStr.length;
    return diff > 0 ? '0'.repeat(diff) + numStr : numStr;
  });
};