import React from 'react';
import SectionContainer from "../sectioncontainer/SectionContainer";
import data from "../../db/db.json"
import "./index.scss"
import { Link } from 'react-router-dom';

function CategoriesPreview() {

    const categories = data.categories

    const categoriesEl = categories.map((category, i) => {
        return <Link to={"/"} className="category-card" key={i}>
            <div className="image-wrapper"><img src={category.img} alt={category.categoryName} /></div>
            <p className="category-name">{category.categoryName}</p>
        </Link>
    })

  return (
    <div to="/" className='section catgeories-preview'>
        <SectionContainer title={"What are your taste-buds saying?"}  children={categoriesEl}/>
    </div>
  )
}

export default CategoriesPreview