// import React, { useState } from "react";
import "./burger.scss";

function Burger({setNavOpen, navOpen}) {
    
  return (
    <svg onClick={()=> setNavOpen(!navOpen)} className={`${navOpen && 'active'} ham hamRotate ham8`} viewBox="0 0 100 100" width="80">
      <path
        class="line top"
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
      ></path>
      <path class="line middle" d="m 30,50 h 40"></path>
      <path
        class="line bottom"
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
      ></path>
    </svg>
  );
}

export default Burger;
