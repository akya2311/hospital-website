import React from 'react';
import './SuccessfulCases.css';
import SliderSection from './SliderSection' // Assuming you're using animate.css for animation effects

const SuccessfulCases = () => {
    return (
        <div className='successful-cases-section'>
            <div className="container-fluid newbk">
                <div
                    className="text-center mx-auto wow fadeInUp pt-5 afac2"
                    data-wow-delay="0.1s"
                    style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}
                >
                    <p className="d-inline-block border rounded-pill py-1 px-4 aaborder">Testimonial</p>
                    <h3 className="afot-Successful">Our Successful Cases</h3>
                    <br />
                    <br />
                </div>
            </div>
            <SliderSection/>
        </div>
    );
};

export default SuccessfulCases;
