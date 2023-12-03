function convertStringToArray(string) {
  const arr = string.split(/(\r\n|\r|\n)/g)
    .filter(el => el.trim().length !== 0);

  return arr;
}

function convertArrayToMatrix(arr) {
  const matrix = arr.map(line => line.split(',').map(el => el.trim()));

  return matrix;
}

export {
  convertStringToArray,
  convertArrayToMatrix
};
