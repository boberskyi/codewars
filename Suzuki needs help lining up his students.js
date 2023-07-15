const lineupStudents = students => {
  return students.split(' ').sort((a, b) => {
    let diff = b.length - a.length;
    return diff !== 0 ? diff : b.localeCompare(a);
  })
}