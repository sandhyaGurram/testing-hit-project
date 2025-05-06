import React from 'react'
import logo from '../assets/img-logo.png'
import '../style/Header.css'
import { NavLink } from 'react-router-dom'


export default function HeaderEx() {




  return (
    <nav className="navbar navbar-expand-lg">
    <div className='navbar container-fluid '>
      <div className='logo'>
        <NavLink to='/' className="navbar-brand"><img src={logo} width={100} alt='logo'/></NavLink>
        
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className='navitemlist collapse navbar-collapse' id="navbarNav">
        <ul className='navbar-nav'>
          <li className='nav-item'><NavLink to="/" className='nav-link' >Home</NavLink></li>
          <li className='nav-item'><NavLink to="/about"  className='nav-link' >About</NavLink></li>
          <li className='nav-item'><NavLink to="/skincare" className='nav-link'>SKincare</NavLink></li>
          <li className='nav-item'><NavLink to="/haircare" className='nav-link' >Haircare</NavLink></li>
          <li className='nav-item'><NavLink to="/contact" className='nav-link' >Contact us</NavLink></li>
        </ul>
        
      </div>
      
    </div>
    </nav>
  )
}
