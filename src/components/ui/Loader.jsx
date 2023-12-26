import React from 'react'

function Loader({ message }) {
  return (
    <div className="loader-wrapper">
      <div className='loader'></div>
      <p>{message}</p>
    </div>
  )
}

export default Loader