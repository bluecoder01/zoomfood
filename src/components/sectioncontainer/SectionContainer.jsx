import React from 'react'

function SectionContainer({ title, children }) {
  return (
    <>
      <h4 className="title">{title}</h4>
      <div className='section-container'>
          {children}
      </div>
    </>
  )
}

export default SectionContainer