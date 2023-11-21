import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../../db/db.json"
import ProductCard from '../../components/productcard/ProductCard';

function Search() {

    const {query} = useParams();

    const results = data.foods.filter(food => {
        return food.foodName.toLowerCase().includes(query.toLowerCase());
    })
    // console.log(results);

  return (
    <div className='search-results'>
        <div className="section-container">
            {
            results[0] ?
            results.map((result) => {
                return (<ProductCard {...result}/>)
            }):(
                <h1>No Results</h1>
            )
            }
        </div>
    </div>
  )
}

export default Search