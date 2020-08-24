let a = [3, 1, 2, 4, 3];

function solution(A) {
  let sumA = A.reduce((a, b) => a + b, 0);
  let sumB = 0;
  let diff = [];
  for (let i = 0; i < A.length - 1; i++) {
    sumB += A[i];
    sumA -= A[i];
    diff[i] = Math.abs(sumA - sumB);
  }
  let D = diff.sort((a, b) => a - b, 0);
  console.log(D[0]);
  return D[0];
}

solution(a);
