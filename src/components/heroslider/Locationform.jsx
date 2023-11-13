import React, { useState } from "react";
import data from "../../db/db.json";

function Locationform() {
  // eslint-disable-next-line
  const [locations, setLocations] = useState(data.locations);

  const locationEl = locations.map((location, index) => {
    return <option key={index} value={location.locationName}>{location.locationName}</option>;
  });

  return (
    <form className="location-form">
      <select defaultValue={"Enter your delivery address"} >
        <option value={"Enter your delivery address"} hidden disabled>Enter your delivery address</option>
        {locationEl}
      </select>
      <button
        type="submit"
        onClick={(e) => {e.preventDefault();}}
      >Get Started</button>
    </form>
  );
}

export default Locationform;
