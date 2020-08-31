//prices 1 = 2; 7 = 7; 30 = 25
function solution(arr) {
  if (!arr || arr.length === 0) return 0;

  let len = arr.length;
  let costsOfDateArr = Array.apply(null, { length: arr[len - 1] + 1 }).map(
    () => 0
  );
  // console.log('###', costsOfDateArr);

  const price1 = 2;
  const price2 = 7;
  const price3 = 25;
  const days = 7;

  let index = 0;
  let n = costsOfDateArr.length;
  for (let i = 1; i < n; i++) {
    if (i === arr[index]) {
      if (i >= days + 1) {
        costsOfDateArr[i] = Math.min(
          costsOfDateArr[i - days - 1] + price2,
          costsOfDateArr[i - 1] + price1
        );
      } else {
        costsOfDateArr[i] = Math.min(
          costsOfDateArr[0] + price2,
          costsOfDateArr[i - 1] + price1
        );
      }
      index += 1;
    } else {
      costsOfDateArr[i] = costsOfDateArr[i - 1];
    }
  }

  // console.log(costsOfDateArr[n - 1]);
  console.log(Math.min(price3, costsOfDateArr[n - 1]));
  return Math.min(price3, costsOfDateArr[n - 1]);
}

const test1 = [1, 4, 6, 7, 28, 30];
const test2 = [1, 7, 8, 9];
const test3 = [1, 4, 6, 7, 15, 16, 28, 30];

solution(test1);
solution(test2);
solution(test3);
