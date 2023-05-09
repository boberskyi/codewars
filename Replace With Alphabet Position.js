const alphabetPosition = text => [...text.replace(/[^a-z]/gi, '').toLowerCase()]
  .map(el => el.charCodeAt() - 96)
  .join(' ');