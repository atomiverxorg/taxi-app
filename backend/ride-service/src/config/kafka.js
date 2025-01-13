const { Kafka } = require('kafkajs');
const kafka = new Kafka({ brokers: ['localhost:9092'] });

const producer = kafka.producer();
const run = async () => {
  await producer.connect();
  await producer.send({
    topic: 'ride-requests',
    messages: [{ value: 'New Ride Request' }]
  });
  console.log('Message sent to Kafka');
};
run();


const consumer = kafka.consumer({ groupId: 'ride-group' });
const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'ride-requests', fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(`Received: ${message.value.toString()}`);
    }
  });
};
runConsumer();