import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-area">
              <div className="orenge-area">
                   <div className="">
                    <h1> Simplify how your team works today.
                         Get Started</h1>
                   </div>
                   <div className="">
                    <button type="button">Get Started</button>
                   </div>
               </div>
               <div className="durk-area">
                   <div className="">
                    <h1>mango</h1>
                   </div>
                   <div className="nav-flex">
                   <div className="navber">
                    <ul>
                        <li><a href="#d">Home</a></li>
                        <li><a href="#d">Pricing</a></li>
                        <li><a href="#d"> Products</a></li>
                        <li><a href="#d">About Us</a></li>
                    </ul>
                   </div>
                   <div className="navber">
                    <ul>
                        <li><a href="#e">Careers</a></li>
                        <li><a href="#e"> Community</a></li>
                        <li><a href="#w"> Privacy Policy</a></li>
                    </ul>
                   </div>
                   </div>
                   <div className="searce-area">
                    <input type="search" id='shearc' placeholder='Updates in your inbox… ' />
                    <label htmlFor="shearc">Go</label>
                    <p>Copyright 2020. All Rights Reserved</p>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default Footer;