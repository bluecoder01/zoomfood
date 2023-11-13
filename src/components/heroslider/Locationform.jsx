import React from 'react'

function Locationform() {
  return (
    <form className='location-form'>
        <input type="text" placeholder='Enter your delivery address'/>
        <button type="submit" onClick={(e) =>{ e.preventDefault() }}> Get Started </button>
    </form>
  )
}

export default Locationform