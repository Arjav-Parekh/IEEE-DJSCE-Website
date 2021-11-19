import React from 'react';
import './Blogs.scss';
import image1 from "../../images/BlogPic1.svg";
import image2 from "../../images/BlogPic2.svg";
import image3 from "../../images/BlogPic3.svg";

function Blogs() {
    return (
        <div>
            <section>
                <h1 className = 'heading'>OUR BLOGS</h1>
            </section>

            <section className = 'content'>
                <div className = 'blog'>
                    <img src = {image1} alt="img1" />
                    <h3>LoraWAN</h3>
                    <p>We attempt to capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.</p>
                </div>
                <div className = 'blog'>
                    <img src = {image2} alt="img2" />
                    <h3>Capitalize</h3>
                    <p>We attempt to capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.</p>
                </div>
                <div className = 'blog'>
                    <img src = {image3} alt="img3" />
                    <h3>Capitalize</h3>
                    <p>We attempt to capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.</p>
                </div>
            </section>
        </div>
    )
}

export default Blogs
