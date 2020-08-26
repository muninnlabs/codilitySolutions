const ar = [1, 3, 6, 4, 1, 2];

const solution = (A) => {
  //   const singleValues = A.filter((item, index) => A.indexOf(item) === index);
  A.sort((a, b) => a - b);
  console.log(A);
  let missingInt = 1;
  for (let i in A) {
    if (A[i] > -1 && A[i] == missingInt) {
      missingInt++;
    }
  }
  console.log(missingInt);
};

solution(ar);
