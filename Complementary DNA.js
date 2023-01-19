const DNAStrand = dna => {
  let obj = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }

  return dna.replace(/./g, el => obj[el]);
}