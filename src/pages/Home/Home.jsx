import React from 'react'
import Hero from '../../components/heroslider/Hero'
import Nearbyrestaurants from '../../components/nearbyrestaurants/Nearbyrestaurants'
import PopularSection from '../../components/popularsection/PopularSection'
import CategoriesPreview from '../../components/categoriespreview/CategoriesPreview'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <main>
        <Nearbyrestaurants />
        <PopularSection />
      </main>
      <CategoriesPreview />
    </div>
  )
}

export default Home