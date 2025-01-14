const cassandra = require('cassandra-driver');
require('dotenv').config();

//console.log(process.env.usernames);

const {NODE1_IP, NODE2_IP, NODE3_IP, DATA_CENTER, USERNAMES, PASSWORD, ITEMS_KEYSPACE} = process.env;

const client = new cassandra.Client({
  contactPoints: [NODE1_IP, NODE2_IP, NODE3_IP],
  localDataCenter: DATA_CENTER,
  credentials: { username: USERNAMES, password: PASSWORD },
  keyspace: ITEMS_KEYSPACE
});

client.connect()
  .then(() => console.log('Connected to Cassandra/ScyllaDB'))
  .catch(err => console.error('Connection error', err));

  module.exports = client;