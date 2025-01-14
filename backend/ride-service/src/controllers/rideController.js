const { getAllRides, saveRide } = require('../models/rideModel');

// Fetch all rides
const getRides = async (req, res) => {
  try {
    const rides = await getAllRides();
    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch rides' });
  }
};

// Save a new ride
const createRide = async (req, res) => {
  const rideData = req.body;
  try {
    const newRide = await saveRide(rideData);
    res.status(201).json(newRide);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create ride' });
  }
};

module.exports = { getRides, createRide };
