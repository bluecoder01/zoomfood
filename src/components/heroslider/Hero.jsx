import React, { useEffect } from 'react'
import HeroSlider from './HeroSlider'
import Locationform from './Locationform'
import "./index.scss"

import AOS from 'aos'
import "aos/dist/aos.css"

function Hero() {

  useEffect(() =>{
    AOS.init({duration:2000});
  }, [])



  return (
    <div  className='hero'>
        <HeroSlider direction="left"/>
        <div className="hero-text" data-aos="fade-up">
          <h1 className='title'>Get <span className='clr-orange'>the best food</span> on campus delivered <span className='clr-orange'>to your doorstep</span>.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint mollitia quaerat, molestiae enim nostrum quae. Architecto voluptates tenetur nisi consequuntur ducimus asperiores non cum quasi sint, enim.
          </p>
          <Locationform />
          <p className="popular">
            We deliver to
          </p>
          <div className="popular-items">
            <p>Pyramid</p>
            <p>Kikelomo</p>
            <p>Arafims</p>
            <p>Primrose</p>
            <p>Atlantic Heights</p>
            <p>Rubiks</p>
          </div>
        </div>
        <HeroSlider direction="right"/>
    </div>
  )
}

export default Hero