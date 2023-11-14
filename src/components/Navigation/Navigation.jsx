import React from 'react'
import { ReactComponent as Logo } from './assets/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import "./index.scss"
import Burger from '../burger'

function Navigation() {
  return (
    <header>
        <Logo className='logo'/>
        <nav>
            <ul>
                <NavLink to={""}>Home</NavLink>
                <NavLink to={""}>Restaurants</NavLink>
                <NavLink to={""}>Categories</NavLink>
                <NavLink to={""}>About Us</NavLink>
            </ul>

             <div className="col-3">
            <form className="search-bar">
                <input type="search" placeholder='What are you looking for?'/>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </form>
            <FontAwesomeIcon icon={faBagShopping}/>
            <button>Sign Up</button>
        </div>
        </nav>
       
        <Burger />
    </header>
  )
}

export default Navigation