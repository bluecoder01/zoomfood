import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import "../scss/global.scss"
import Navigation from '../components/Navigation/Navigation'

function Layout() {
  return (
    <div className='container content'>
      <Navigation />
        <Routes>
          <Route path='/' element={<Home /> } />
        </Routes>
    </div>
  )
}

export default Layout