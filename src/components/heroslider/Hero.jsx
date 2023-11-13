import React from 'react'
import HeroSlider from './HeroSlider'
import Locationform from './Locationform'

function Hero() {
  return (
    <div className='hero'>
        <HeroSlider direction="left"/>
        <div className="hero-text">
          <h1 className='title'>Get the best food on campus delivered to your doorstep</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint mollitia quaerat, molestiae enim nostrum quae. Architecto voluptates tenetur nisi consequuntur ducimus asperiores non cum quasi sint, enim, repellat vel dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt tempora omnis unde ab est.
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