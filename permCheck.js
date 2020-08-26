const ar = [1, 2, 3, 5];

const solution = (A) => {
  let range = A.length;
  let total = ((range + 1) * (range + 2)) / 2;
  let sumRed = A.reduce((sum, elem) => {
    return sum + elem;
  }, 0);
  //   const permCheck = total < 0 ? 0 : 1;
  let permCheck = 0;
  let set = new Set(A);

  console.log(set.size);
  console.log(total);
  console.log(sumRed);
  console.log(permCheck);
  if (sumRed == total && range == set.size) {
    permCheck = 1;
  }
  console.log(permCheck);
  return permCheck;
};

solution(ar);
