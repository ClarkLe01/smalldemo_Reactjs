import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link> */}

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
    </nav>
  )
}

export default NavBar