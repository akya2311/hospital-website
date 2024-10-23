import React from 'react';
import Slider from 'react-slick';
import './PatientsSection.css'; // Ensure the path is correct

const PatientsSection = () => {
    const settings = {
        dots: false, // Show dots for better navigation
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="testimonial-carousel container my-5">
            <h2 className="section-title text-center mb-4">What Our <strong>Patients Say</strong></h2>
            <Slider {...settings}>
                {/* Testimonial 1 */}
                <div className="testimonial-item text-center">
                    <div className="testimonial-text rounded text-center p-4 shadow">
                        <p>
                            Thank you so much Dr Kunal Oswal Sir &amp; Team of Parasmani Hospital. My sister Harshda Patil was admitted for surgery... She got operated on very nicely... All the procedure was uneventful. Once again, thank you so much.
                        </p>
                        <h5 className="mb-1">Shambhu Tanpure</h5>
                        <span className="fst-italic text-muted">Happy Patient</span>
                    </div>
                </div>
                {/* Testimonial 2 */}
                <div className="testimonial-item text-center">
                    <div className="testimonial-text rounded text-center p-4 shadow">
                        <p>
                            The services that I received from Parasmani Hospital are excellent. Dr. Kunal Oswal and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to family and friends.
                        </p>
                        <h5 className="mb-1">Sruthi Arvind</h5>
                        <span className="fst-italic text-muted">Happy Patient</span>
                    </div>
                </div>
                {/* Testimonial 3 */}
                <div className="testimonial-item text-center">
                    <div className="testimonial-text rounded text-center p-4 shadow">
                        <p>
                            Went here for my booster dose of Covid vaccination the other day and sister Charu administered it most efficiently. I have never taken an intramuscular injection that hurt so little. Our healthcare system would collapse in a day if it wasn't for such efficient and hardworking nursing staff!
                        </p>
                        <h5 className="mb-1">Meherzad Boomla</h5>
                        <span className="fst-italic text-muted">Happy Patient</span>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default PatientsSection;
