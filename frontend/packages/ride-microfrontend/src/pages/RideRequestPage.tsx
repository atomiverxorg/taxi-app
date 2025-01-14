import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';

const RideRequestPage = () => {
  const [rideData, setRideData] = useState({
    id: '',
    driver_id: '',
    user_id: '',
    origin: '',
    destination: '',
    status: 'pending'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRideData({ ...rideData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    axios.post('http://localhost:4000/api/rides', rideData)
      .then((response) => console.log('Ride created:', response.data))
      .catch((error) => console.error('Error creating ride:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="id" placeholder="Ride ID" onChange={handleChange} />
      <input name="driver_id" placeholder="Driver ID" onChange={handleChange} />
      <input name="user_id" placeholder="User ID" onChange={handleChange} />
      <input name="origin" placeholder="Origin" onChange={handleChange} />
      <input name="destination" placeholder="Destination" onChange={handleChange} />
      <button type="submit">Request Ride</button>
    </form>
  );
};

export default RideRequestPage;
