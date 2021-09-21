import React from 'react'
import './Location.css'

function Location() {
    return (
        <div className="location-container">
        <div className="input-container">
            <input className="location-input" type="text" placeholder="Enter your delivery location" />
            <button className="locate-btn"><i className="fa fa-crosshairs" /> Locate Me</button>
        </div>
        <button className="find-food">FIND FOOD</button>
        </div>
    )
}

export default Location
