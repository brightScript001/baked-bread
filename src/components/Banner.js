import React from 'react';
import "../styles/Banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Savor the Taste of Freshly <br></br><span>Baked Bread</span> </h1>
                <p>Indulge in Our Handcrafted Creations Straight from the Oven</p>
                <button>Explore Now</button>
            </div>
            <div className="banner-image">
                <img src="images/bread.png" alt="Bread" />
            </div>

        </div>
    );
};

export default Banner;