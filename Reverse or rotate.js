const revrot = (str, sz) => {
  if (sz <= 0 || str === "") {
    return "";
  }
  if (sz > str.length) {
    return "";
  }

  const chunks = [];
  for (let i = 0; i < str.length; i += sz) {
    chunks.push(str.slice(i, i + sz));
  }

  let result = "";

  for (const chunk of chunks) {
    if (chunk.length === sz) {
      const digitSum = chunk.split("").reduce((sum, digit) => sum + Math.pow(parseInt(digit, 10), 3), 0);
      if (digitSum % 2 === 0) {
        result += chunk.split("").reverse().join("");
      } else {
        result += chunk.slice(1) + chunk[0];
      }
    }
  }

  return result;
}