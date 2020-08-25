let a = [1, 3, 1, 4, 2, 3, 5, 4];
let x = 5;

function solution(X, A) {
  let holdValues = new Set();
  for (let i = 0; i < A.length; i++) {
    holdValues.add(A[i]);
    if (holdValues.size == X) {
      console.log(i);
      return i;
    }
  }
  console.log(i);
  return -1;
}
solution(x, a);
