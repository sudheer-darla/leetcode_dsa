function oneMinusZeroes(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const rowOnes = new Array(m).fill(0);
  const colOnes = new Array(n).fill(0);

  // Count ones in each row and column
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      rowOnes[i] += grid[i][j];
      colOnes[j] += grid[i][j];
    }
  }
  console.log(rowOnes);
  console.log(colOnes);

  // Calculate the difference matrix
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      grid[i][j] = 2 * (rowOnes[i] + colOnes[j]) - m - n;
    }
  }

  console.log(grid);
  return grid;
}

let grid = [
  [0, 1, 1],
  [1, 0, 1],
  [0, 0, 1],
];

oneMinusZeroes(grid);
