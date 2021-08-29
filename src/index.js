module.exports = function towelSort (matrix) {
  if (matrix) {
    let sortMatrix = [];
    matrix.forEach((i, index) => {
      index % 2 ? sortMatrix.push(i.reverse()) : sortMatrix.push(i);
  });
  return sortMatrix.flat();
}
  return [];
}
