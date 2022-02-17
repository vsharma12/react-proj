import React from 'react'

export default function Navbar (props) {
  return (
    <>
      <nav className='nav--bar'> 
          <span>{props.title}</span>
      </nav>
    </>
  )
}
