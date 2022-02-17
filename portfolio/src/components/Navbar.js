import React from 'react'
import Img from '../images/taurus.png'
import { Link } from 'react-scroll'
import menu from '../images/menu.png'

export default function Navbar () {
  return (
    <>
      <nav className='navbar fixed-top navbar-light'>
        <input type='checkbox' id='check' />
        <label className='menu--bar' htmlFor='check'>
          <img className='menu--image' src={menu} alt='img' />

          <div className='container'>
              <img class='img--logo' src={Img} alt='img' />
          </div>
        </label>

        <ul>
          <li>
            <Link
              className='navbar--link mx-4'
              to='Skills'
              smooth={true}
              duration={5000}
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              className='navbar--link mx-4'
              to='Education'
              smooth={true}
              duration={1000}
            >
              Education
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
