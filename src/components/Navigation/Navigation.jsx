import React from 'react'
import { ReactComponent as Logo } from './assets/Logo.svg'

function Navigation() {
  return (
    <header>
        <Logo />
        <form className="search-bar">
            <input type="search" placeholder='What are you looking for?'/>
            
        </form>
    </header>
  )
}

export default Navigation