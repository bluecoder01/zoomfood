import React, { useContext, useState } from "react";
import data from "../../db/db.json";
import { DeliveryLocation } from "../../contexts";
import { useNavigate } from "react-router-dom";

function Locationform() {
  // eslint-disable-next-line
  const [locations, setLocations] = useState(data.locations);

  const locationEl = locations.map((location, index) => {
    return <option key={index} value={location.locationName}>{location.locationName}</option>;
  });

  const { setDeliveryLocation } = useContext(DeliveryLocation);
  const [currentLocation, setCurrentLocation] = useState('Enter your delivery address'); 

  function setLocation(){
    setDeliveryLocation(currentLocation)
  }

  return (
    <form className="location-form">
      <select value={currentLocation} onChange={(e) =>{setCurrentLocation(e.target.value)}}>
        <option value={"Enter your delivery address"} hidden disabled>Enter your delivery address</option>
        {locationEl}
      </select>
      <button
        type="submit"
        onClick={(e) => {e.preventDefault(); setLocation()}}
      >Get Started</button>
    </form>
  );
}

export default Locationform;
