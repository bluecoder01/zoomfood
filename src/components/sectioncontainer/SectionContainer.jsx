import React from 'react'

function SectionContainer({ title, children }) {
  return (
    <div className='section-container'>
        <h4 className="title">{title}</h4>
        {children}
    </div>
  )
}

export default SectionContainer