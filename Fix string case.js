const solve = (str) => {
  const uppercaseCount = (str.match(/[A-Z]/g) || []).length;
  const lowercaseCount = (str.match(/[a-z]/g) || []).length;

  return (uppercaseCount > lowercaseCount) ? str.toUpperCase() : str.toLowerCase();
};