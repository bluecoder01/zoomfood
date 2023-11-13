import React from 'react';
import SectionContainer from "../sectioncontainer/SectionContainer";
import data from "../../db/db.json"

function CategoriesPreview() {

    const categories = data.categories

    const categoriesEl = categories.map((category, i) => {
        return <div className="category-card" key={i}>
            <div className="image-wrapper"><img src="" alt={category.categoryName} /></div>
            <p className="category-name">{category.categoryName}</p>
        </div>
    })

  return (
    <div className='section catgeories-preview'>
        <SectionContainer title={"What's On your Mind?"}  children={categoriesEl}/>
    </div>
  )
}

export default CategoriesPreview