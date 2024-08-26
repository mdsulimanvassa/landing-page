import React from 'react';
import './About.css';
import image1 from '../../images/illustration-intro.svg';

const About = () => {
    return (
        <div id='about'>
            <div className="half-width">
                <h1>Bring everyone together to build better products.</h1>
                <p>  Manage makes it simple for software teams to plan day-to-day 
                    tasks while keeping the larger team goals in view.
                </p>
                <button type="button"> Get Started</button>
            </div>
            <div className="half-width">
                <img src={image1} alt="images" />
            </div>
        </div>
    );
};

export default About;