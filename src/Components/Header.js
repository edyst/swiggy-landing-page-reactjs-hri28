import React from 'react'
import Navbar from './Navbar';
import Herotext from './Herotext';
import Location from './Location';
import Cities from './Cities';
import './Header.css'

function Header(){
    return(
        <div className="header-container">
        <div className ="row">
        <div className="hero-components col-md-12 col-lg-7">
        <Navbar className="navbar" />
        <Herotext />
        <Location />
        <Cities />
        </div>
        <div className="col-lg-5 header-img">
        </div>
        </div>
        </div>
    )
}

export default Header;