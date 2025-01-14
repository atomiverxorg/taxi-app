const express = require('express');
const rideRoutes = require('./routes/rideRoutes');
// const userRoutes = require('./routes/userRoutes');
const cors = require('cors'); // Allows requests from frontend
const app = express();

// Middlewares
// app.use(cors()); // Enables CORS for frontend-backend communication
app.use(cors({ allowedHeaders: 'Content-Type, Cache-Control' }));
app.options('*', cors());  // enable pre-flight
app.use(express.json()); // Parses incoming JSON requests

// API Routes
app.use('/api/rides', rideRoutes); // Routes for ride operations
//app.use('/api/users', userRoutes); // Routes for user operations

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
