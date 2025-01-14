import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ center }: any) => (
  <LoadScript googleMapsApiKey="YOUR_API_KEY">
    <GoogleMap mapContainerStyle={{ height: "400px", width: "100%" }} center={center} zoom={14}>
      <Marker position={center} />
    </GoogleMap>
  </LoadScript>
);

export default MapComponent;
