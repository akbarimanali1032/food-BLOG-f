/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Link } from "react-router-dom";
// import img1 from './img/food1.jpg'

const About = () => {
    window.addEventListener('DOMContentLoaded', () => {
        let demoSelect = document.querySelector('.demo__select');
        let heroSection = document.querySelector('.hero');
        let HeroTitleCornerName = heroSection.querySelector('.hero__title span');

        demoSelect.addEventListener('change', () => {
            heroSection.className = 'hero hero--has-shadow-' + demoSelect.value;
            HeroTitleCornerName.innerHTML = demoSelect.value;
        });
    });
    return (
        <Link to={ About }>
            <div className="demo">


            </div>

            <div className="hero hero--has-shadow-bottom-left">
                <div className="hero__content">
                    <h4 className="hero__title">
                        <span>bottom-left</span> corner shadow
                    </h4>
                    <p className="hero__text">
                        This demo example shows how to make your white text for "Hero" sections, easy to use solution with smooth shadow behind the text allows your white text to be readable even on top of light images/videos...</p>
                </div>

                <div className="hero__background">
                    <div className="responsive-wrapper ratio-21x9">
                        <iframe type="text/html" src="https://www.youtube.com/embed/mlHklH5VBtI?autoplay=1&amp;loop=1&amp;rel=0&amp;showinfo=0&amp;color=black&amp;mute=1&amp;iv_load_policy=3&amp;playlist=mlHklH5VBtI"></iframe>
                    </div>
                </div>
            </div>

        </Link >
    )
}

export default About