let a = [1, 2, 3, 5];
let b = [1, 2, 3, 4, 6];
let c = [1];
let d = [];
let e = [];
let f = [1, 2, 4];
for (let j = 1; j <= 100; j++) {
  if (j != 99) {
    d.push(j);
  }
}

const findMissingVAlue = (A) => {
  let sum = ((A.length + 1) * (A.length + 2)) / 2;
  console.log(sum);
  for (let i = 0; i < A.length; i++) {
    sum -= A[i];
  }
  console.log(sum);
  return sum;
};

// findMissingVAlue(a);
// findMissingVAlue(b);
// findMissingVAlue(c);
findMissingVAlue(d);
// findMissingVAlue(e);
findMissingVAlue(f);
