const fibonacci = (num) => {
  let arr = [0, 1];
  for (let i = 2; i < num + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log(arr);
};
//call the function passing the number of interactions
fibonacci(13);
