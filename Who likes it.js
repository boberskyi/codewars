const likes = names => {
  const length = names.length;

  const cases = {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`
  };

  return cases[length] || `${names[0]}, ${names[1]} and ${length - 2} others like this`;
};