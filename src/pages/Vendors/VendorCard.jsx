import React, { useState } from "react";
import { faHeart as blankHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss"

function VendorCard({vendor}) {

    const [liked, setLiked] = useState(false);

  return (
    <div to={"/vendors/" + vendor.restaurantId} className="vendor-card">
      <img src={vendor.img} alt="" />
      <div className="details">
        <h5 className="vendor-name">{vendor.restaurantName}</h5>
        <p className="vendor-rating"> <FontAwesomeIcon icon={faStar} color="yellow"></FontAwesomeIcon> {vendor.aveRating.toFixed(1)}</p>
      </div>
      <FontAwesomeIcon
        onClick={() => {
          setLiked(!liked);
        }}
        icon={liked ? faHeart : blankHeart}
      ></FontAwesomeIcon>
    </div>
  );
}

export default VendorCard;
