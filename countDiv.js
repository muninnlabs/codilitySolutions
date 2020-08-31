const solution = (A, B, K) => {
  if (K === 0 || A > B) {
    return 0;
  }
  let currentDivisor;
  let counter = 0;
  for (let i = A; i <= B; i++) {
    if (i % K == 0) {
      counter++;
    }
  }
  console.log('Mine ', K, A, B, counter);

  let k;
  k = Math.floor(B / K) - Math.floor(A / K) + (A % K === 0 ? 1 : 0);

  console.log('their', K, A, B, k);
};

// solution(6, 11, 2);
// solution(6, 11, 6);
solution(11, 345, 17);
// solution(0, 0, 11);
// solution(1, 1, 11);
// solution(10, 10, 5);
// solution(10, 10, 7);
// solution(10, 10, 20);
