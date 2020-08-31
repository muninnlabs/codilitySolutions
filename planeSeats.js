// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// '1A 2F 1C'
function solution(rows, reservedSeats) {
  const reservedSeatsArray = reservedSeats.split(' ');
  let maxSeatsAvailable = rows * 3;
  let takenBlock = {};
  console.log('starting seats', maxSeatsAvailable);
  for (let i = 0; i < reservedSeatsArray.length; i++) {
    let seat = reservedSeatsArray[i];
    if (seat.match(/[ABC]/)) {
      if (!takenBlock[1 + seat[0]]) {
        maxSeatsAvailable--;
        takenBlock[1 + seat[0]] = true;
      }
    }
    if (seat.match(/[EF]/)) {
      if (!takenBlock[2 + seat[0]]) {
        maxSeatsAvailable--;
        takenBlock[2 + seat[0]] = true;
      }
    }
    if (seat.match(/[HJK]/)) {
      if (!takenBlock[3 + seat[0]]) {
        maxSeatsAvailable--;
        takenBlock[3 + seat[0]] = true;
      }
    }
  }
  console.log('end of function', maxSeatsAvailable);
  return maxSeatsAvailable;
}

let a = '1A 2F 1C';
solution(2, a);
