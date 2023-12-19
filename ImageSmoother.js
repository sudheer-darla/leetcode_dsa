// https://leetcode.com/problems/image-smoother/description/?envType=daily-question&envId=2023-12-19

function imageSmoother(img) {
  const rows = img.length;
  const cols = img[0].length;

  // Create a new matrix to store the smoothed values
  const result = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

  // Define a helper function to get the average of surrounding cells
  const getAverage = (row, col) => {
    let sum = 0;
    let count = 0;

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i >= 0 && i < rows && j >= 0 && j < cols) {
          sum += img[i][j];
          count++;
        }
      }
    }

    return Math.floor(sum / count);
  };

  // Iterate through each cell of the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Calculate the average and round down
      result[i][j] = getAverage(i, j);
    }
  }

  console.log(result);
  return result;
}

imageSmoother([
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100],
]);
