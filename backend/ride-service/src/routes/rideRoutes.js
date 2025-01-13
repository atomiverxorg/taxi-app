const express = require('express');
const router = express.Router();
const { getRides, createRide } = require('../controllers/rideController');

// GET all rides
router.get('/', getRides);

// POST a new ride
router.post('/', createRide);

module.exports = router;
