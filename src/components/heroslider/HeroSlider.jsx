import React from "react";
import pizza from "./assets/pngimg.com - pizza_PNG43993.png";
import shawarma from "./assets/shawarma.webp";
import chicken from "./assets/crispy-fried-chicken.png";
import jollof from "./assets/jollof.png";
import pepsi from "./assets/3dc54e8f5df2eaa53ca93758d080b2f0.png";
import iceCream from "./assets/ice-cream.webp";
// import { register } from "swiper/element/bundle";
// import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss"

function HeroSlider({ direction }) {
//   register();

  return (
    <div className="hero-slider" id={direction}>
      <div className="hero-slider-wrapper">
        <img src={pizza} alt="" />
        <img src={chicken} alt="" />
        <img src={jollof} alt="" />
        <img src={pepsi} alt="" />
        <img src={iceCream} alt="" />
        <img src={shawarma} alt="" />
        <img src={pizza} alt="" />
        <img src={chicken} alt="" />
        <img src={jollof} alt="" />
        <img src={pepsi} alt="" />
        <img src={iceCream} alt="" />
        <img src={shawarma} alt="" />
      </div>
    </div>
  );
}

export default HeroSlider;
