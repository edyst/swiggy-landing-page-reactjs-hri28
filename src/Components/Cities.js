import React from 'react'
import './Cities.css'
function Cities() {
    return (
        <div className="cities-container">
        <h6>POPULAR CITIES IN INDIA</h6>
        <ul className="names">
            <li className="city">Ahmedabad</li>
            <li className="city">Bangalore</li>
            <li className="city">Chennai</li>
            <li className="city">Delhi</li>
            <li className="city">Gurgaon</li>
            <li className="city">Hyderabad</li>
            <li className="city">Kolkata</li>
            <li className="city">Mumbai</li><br />
            <li className="city">Pune</li>
            <li className="city">& more.</li>
        </ul>   
        </div>
    )
}

export default Cities
