import React, { useContext } from "react";
import { DeliveryLocation } from "../../contexts/index";
import Locationform from "./LocationForm2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Location() {
  const { deliveryLocation, setDeliveryLocation } =
    useContext(DeliveryLocation);

  return (
    <div className="location-box">
      {deliveryLocation !== "" &&
      deliveryLocation !== "Enter your delivery address" ? (
        <div className="location-box-wrapper">
          <h1>We're delivering your bites to:</h1>
          <p className="location"> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {deliveryLocation}</p>
          <div className="change-location">
            <button
              onClick={() => {
                setDeliveryLocation("");
              }}
            >
              Change Location
            </button>
          </div>
        </div>
      ) : (
        <div className="location-box-wrapper">
          <Locationform />
        </div>
      )}
    </div>
  );
}

export default Location;
