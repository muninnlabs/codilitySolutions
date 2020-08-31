const ordersObj = [
  {
    orderId: 1710,
    orderDate: '2017-03-25',
    orderLines: [
      {
        productId: 10,
        name: '11111',
        quantity: 1,
      },
    ],
  },
  {
    orderId: 1711,
    orderDate: '2017-03-25',
    orderLines: [
      {
        productId: 10,
        name: '11111',
        quantity: 1,
      },
      {
        productId: 11,
        name: '11111',
        quantity: 1,
      },
    ],
  },
  {
    orderId: 1712,
    orderDate: '2017-03-26',
    orderLines: [
      {
        productId: 10,
        name: '11111',
        quantity: 1,
      },
      {
        productId: 11,
        name: '11111',
        quantity: 1,
      },
    ],
  },
  {
    orderId: 1713,
    orderDate: '2017-03-26',
    orderLines: [
      {
        productId: 11,
        name: '11111',
        quantity: 1,
      },
      {
        productId: 12,
        name: '11111',
        quantity: 1,
      },
    ],
  },
  {
    orderId: 1714,
    orderDate: '2017-03-27',
    orderLines: [
      {
        productId: 10,
        name: '11111',
        quantity: 1,
      },
      {
        productId: 11,
        name: '11111',
        quantity: 1,
      },
    ],
  },
];

const teste = (productId, orders) => {
  const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  let productByWeekDay = new Map();

  orders.forEach((order) => {
    const dayOfWeek = new Date(order.orderDate).getDay();
    if (!productByWeekDay.has(weekdays[dayOfWeek])) {
      productByWeekDay.set(weekdays[dayOfWeek], { total: 0 });
    }
    order.orderLines.forEach((product) => {
      if (product.productId === productId) {
        productByWeekDay.get(weekdays[dayOfWeek]).total += product.quantity;
      }
    });
  });
  console.log(productByWeekDay);
  return productByWeekDay;
};

teste(13, ordersObj);
