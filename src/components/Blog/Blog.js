import React from 'react';
import './Blog.css';
import image2 from '../../images/avatar-anisha.png';
import image3 from '../../images/avatar-ali.png';
import image4 from '../../images/avatar-richard.png';

const Blog = () => {
    return (
        <div id='blog'>
            <div className="">
            <div className="containt">
                <h1>What they've said</h1>
                <div className="flex-area">
                <div className="user-images">
                    <div className="imageg">
                        <img src={image2} alt="images" />
                    </div>
                    <div className="text-area">
                        <h3>Anisha Li</h3>
                        <p> “Manage has supercharged our team's workflow. The ability to maintain 
                        visibility on larger milestones at all times keeps everyone motivated.”</p>
                    </div>
                </div>
                <div className="user-images three">
                    <div className="imageg a">
                        <img src={image3} alt="images" />
                    </div>
                    <div className="text-area">
                        <h3> Ali Bravo</h3>
                        <p> “We have been able to cancel so many other subscriptions since using 
                        Manage. There is no more cross-channel confusion and everyone is much 
                        more focused.”</p>
                    </div>
                </div>
                <div className="user-images three">
                    <div className="imageg b">
                        <img src={image4} alt="images" />
                    </div>
                    <div className="text-area">
                        <h3>Richard Watts</h3>
                        <p>  “Manage allows us to provide structure and process. It keeps us organized 
                        and focused. I can't stop recommending them to everyone I talk to!”</p>
                    </div>
                </div>
                </div>
                <button type="button">Get Started</button>
            </div>
            </div>
        </div>
    );
};

export default Blog;