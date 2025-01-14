const client = require('../config/cassandra');

// Fetch all rides from Cassandra
const getAllRides = async () => {
  const query = 'SELECT * FROM rides';
  const result = await client.execute(query);
  return result.rows;
};

// Save a new ride in Cassandra
const saveRide = async (ride) => {
  const query = 'INSERT INTO rides (id, driver_id, user_id, origin, destination, status) VALUES (?, ?, ?, ?, ?, ?)';
  const params = [ride.id, ride.driver_id, ride.user_id, ride.origin, ride.destination, ride.status];
  await client.execute(query, params, { prepare: true });
  return ride;
};

module.exports = { getAllRides, saveRide };
