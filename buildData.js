const fs = require('fs');

const orders = [
  {
    id: '1',
    number: "ORD090987678765",
    type: 'Order 1',
    imageSrc: '/images/orders.png',
    imageDescription: 'Order 1',
  },
  {
    id: '2',
    number: "ORD0909876787890",
    type: 'Order 2',
    imageSrc: '/images/orders.png',
    imageDescription: 'Order 2',
  },
  {
    id: '3',
    number: "ORD0909876788745",
    type: 'Order 3',
    imageSrc: '/images/orders.png',
    imageDescription: 'Order 3',
  },
  {
    id: '4',
    number: "ORD0909780678765",
    type: 'Order 4',
    imageSrc: '/images/disconnect-orders.jpeg',
    imageDescription: 'Order 4',
  },
];

const appointments = [
  {
    id: '1',
    number: "APT090987678765",
    status: 'Reserved',
    imageSrc: '/images/appointments.png',
    imageDescription: 'Appointment 1',
  },
  {
    id: '2',
    number: "APT0909876787890",
    status: 'Booked',
    imageSrc: '/images/appointments.png',
    imageDescription: 'Appointment 2',
  },
  {
    id: '3',
    number: "APT0909876788745",
    status: 'Cancelled',
    imageSrc: '/images/appointments.png',
    imageDescription: 'Appointment 3',
  },
  {
    id: '4',
    number: "APT0909780678765",
    status: 'Rescheduled',
    imageSrc: '/images/appointments.png',
    imageDescription: 'Appointment 4',
  },
];

fs.writeFileSync('./content/orders.json', JSON.stringify(orders));
try {
  fs.mkdirSync('./content/orders');
} catch (e) {
  if (e.code !== 'EEXIST') throw e;
}
orders.forEach(order => {
  fs.writeFileSync(
    `./content/orders/${order.id}.json`,
    JSON.stringify(order),
  );
});

fs.writeFileSync('./content/appointments.json', JSON.stringify(appointments));
try {
  fs.mkdirSync('./content/appointments');
} catch (e) {
  if (e.code !== 'EEXIST') throw e;
}
appointments.forEach(appointment => {
  fs.writeFileSync(
    `./content/appointments/${appointment.id}.json`,
    JSON.stringify(appointment),
  );
});
