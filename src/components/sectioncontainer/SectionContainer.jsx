import React from 'react'
import "./index.scss"

function SectionContainer({ title, children }) {
  return (
    <>
      {title && <h4 className="title">{title}</h4>}
      <div className='section-container'>
          {children}
      </div>
    </>
  )
}

export default SectionContainer