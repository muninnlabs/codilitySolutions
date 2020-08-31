const solution = (linkedList) => {
  let count = 1;

  while (linkedList.next) {
    count++;
    linkedList = linkedList.next;
  }
  console.log(count);
};

let list = {
  value: 1,
  next: {
    value: 1,
    next: {
      value: 1,
      next: {
        value: 1,
        next: null,
      },
    },
  },
};
solution(list);
