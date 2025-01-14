import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RideRequestPage from './pages/RideRequestPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request-ride" element={<RideRequestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
