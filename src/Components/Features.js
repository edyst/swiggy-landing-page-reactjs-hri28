import React from 'react'
import './Features.css'

function Features(){
    return(
        <div className="features-container">
        <div className="row-item">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" className="featuresimg" alt="featuresimg" />
            <h6>No Minimum Order</h6>
            <p>Order in for yourself or for the group<br /> with no restrictions on order value</p>
        </div>

        <div className="row-item">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" className="featuresimg" alt="featuresimg" />
            <h6>Live Order Tracking</h6>
            <p>Know where your order is at all times,<br /> from the restaurant to your doorstep</p>
        </div>

        <div className="row-item">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" className="featuresimg" alt="featuresimg" />
            <h6>Lightning-Fast Delivery</h6>
            <p>Experience Swiggy's superfast delivery<br /> for food delivered fresh & on time</p>
        </div>

        </div>
    )
}

export default Features;