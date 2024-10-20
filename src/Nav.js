import React from "react";
import './Nav.css'
const Nav = () => {
    return(
        <>
        <div className="nav-container">
            <nav className="nav">
            <div className="logo-section">
            <img src = "https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729269890/images_ujorox.jpg"
            alt ="chaperone"
            className="chaperone-img"
            />
            <h1 className="brand-name"> Chaperone</h1>
            </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>Plants & Pots</li>
                <li>Tools</li>
                <li>Our Services</li>
                <li>Blog</li>
                <li>Our Story</li>
                <li>FAQs</li>
            </ul>
            <div className="profile-cart-section">
                <div>
                    <img
                    src="https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729273327/istockphoto-1300845620-612x612_c9hqq0.jpg"
                    alt = "profile"
                    className="profile-img" 
                    />
                    <span className="profile-name">My profile</span>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729273590/download_xka6uw.png"
                    alt="cart"
                    className="cart-image"
                    />
                    <span className="cart-name">Cart</span>
                </div>
            </div>
        </nav>
        </div>
        
</>
    );
};

export default Nav;