import React from 'react'
import SectionContainer from '../sectioncontainer/SectionContainer'
import data from "../../db/db.json"
import ProductCard from '../productcard/ProductCard';

function PopularSection() {

    const cards = data.foods.slice(0,6);

    const children = cards.map((card, index) =>{
        return <ProductCard key={index} {...card}/>
    }) 

  return (
    <div className='section popular'>
        <SectionContainer title={"Popular Orders"} children={children}/>
        
    </div>
  )
}

export default PopularSection