import React from 'react';
import './Info.css'

function Info(){
    return(
        <div className="section-container">
            <div className="row mx-5">
                <div className="info-section col-xs-9 col-md-5">
                    <h2 className="info-h2">Restaurants in<br/> your pocket</h2>
                    <p className="pt-2 info-p">Order from your favorite restaurants & track<br /> on the go,
                    with the all-new Swiggy app.</p>
                    <a href="/" className="px-2"><img className="pt-4 mb-4 info-img img img-responsive" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="app-store" /></a>
                    <a href="/" className="px-2"><img className="pt-4 mb-4 info-img img img-responsive" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="play-store"/></a>
                </div>
                <div className="pocket-images col-md-7">
                    <img className="col-6 pocket-img1" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" alt="pocket-img1" />
                    <img className="col-6 pocket-img2" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" alt="pocket-img2" />
                </div>
            </div>
        </div>
    )
}

export default Info;