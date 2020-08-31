const ar = [1, 2, 3, 5];

const solution = (A) => {
  let range = A.length;
  let total = ((range + 1) * range) / 2;
  let sumRed = A.reduce((sum, elem) => {
    return sum + elem;
  }, 0);
  let permCheck = 0;
  let set = new Set(A);
  if (sumRed == total && range == set.size) {
    permCheck = 1;
  }
  return permCheck;
};

solution(ar);
