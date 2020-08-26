let n = 5;
let a = [3, 4, 4, 6, 1, 4, 4];

function solution(N, A) {
  const counters = new Array(N).fill(0);
  let min = 0;
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === N + 1) {
      min = max;
    } else if (A[i] >= 1 && A[i] <= N) {
      const newValue = Math.max(min, counters[A[i] - 1]) + 1;
      counters[A[i] - 1] = newValue;
      max = Math.max(max, newValue);
      console.log(newValue);
    }
  }
  for (let j = 0; j < N; j++) {
    counters[j] = Math.max(counters[j], min);
  }
  console.log(counters);
}

solution(n, a);
