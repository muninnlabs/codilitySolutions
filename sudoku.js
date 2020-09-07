let sud1 = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];
let sud2 = [
  [3, 1, 6, 5, 7, 8, 4, 9, 2],
  [5, 2, 9, 1, 3, 4, 7, 6, 8],
  [4, 8, 7, 6, 2, 9, 5, 3, 1],
  [2, 6, 3, 0, 1, 5, 9, 8, 7],
  [9, 7, 4, 8, 6, 0, 1, 2, 5],
  [8, 5, 1, 7, 9, 2, 6, 4, 3],
  [1, 3, 8, 0, 4, 7, 2, 0, 6],
  [6, 9, 2, 3, 5, 1, 8, 7, 4],
  [7, 4, 5, 0, 8, 6, 3, 1, 0],
];
let sud3 = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
// console.log(sud1[0][3]);

const possible = (y, x, n, sudMatrix) => {
  for (let i = 0; i < 9; i++) {
    if (sudMatrix[y][i] == n) {
      return false;
    }
  }
  for (let j = 0; j < 9; j++) {
    if (sudMatrix[j][x] == n) {
      return false;
    }
  }
  let x0 = Math.floor(x / 3) * 3;
  let y0 = Math.floor(y / 3) * 3;
  for (let k = 0; k < 3; k++) {
    for (let l = 0; l < 3; l++) {
      if (sudMatrix[y0 + k][x0 + l] == n) {
        return false;
      }
    }
  }
  return true;
};

const solveSudoku = (sudokuArray) => {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (sudokuArray[y][x] == 0) {
        for (let n = 1; n < 10; n++) {
          if (possible(y, x, n, sudokuArray)) {
            sudokuArray[y][x] = n;
            //         // solveSudoku(sudokuArray);
            //         sudokuArray[y][x] = 0;
          }
          //       return;
        }
      }
    }
  }
  console.log(sudokuArray);
  return sudokuArray;
};
solveSudoku(sud3);
