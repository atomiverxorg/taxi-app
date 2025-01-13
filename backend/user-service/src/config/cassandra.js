const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1', // Adjust as needed
  keyspace: 'your_keyspace'
});

client.connect()
  .then(() => console.log('Connected to Cassandra/ScyllaDB'))
  .catch(err => console.error('Connection error', err));
