import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SetStateAction } from 'react';
interface Rider {
  id: string;
  origin: string;
  destination: string;
  status: string;
}

interface ResponseData {
  data: SetStateAction<never[]>;
}

interface ResponseError {
  error: string;
}
const HomePage = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    // Fetch rides from backend
    axios.get('http://localhost:4000/api/rides')
      .then((response: ResponseData) => setRides(response.data))
      .catch((error: ResponseError) => console.error('Error fetching rides:', error));
  }, []);

  return (
    <div>
      <h1>Available Rides</h1>
      <ul>
        {rides.map((ride: Rider) => (
          <li key={ride.id}>
            From {ride.origin} to {ride.destination} (Status: {ride.status})
          </li>
        ))}
      </ul>
      <Link to={`request-ride`}>Request Ride</Link>
    </div>
  );
};

export default HomePage;
