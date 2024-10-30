import React from 'react';
import './DirectorsSection.css'; // Import your custom CSS file

const DirectorsSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp afac2">
          <h3 className="afot">Our Directors</h3>
        </div>

        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="director-card">
              <img
                className="img-fluid aimg"
                src="https://paarasmanihospital.com/img/about22.jpg"
                alt="Top Urologists in Kharadi"
              />
              <h4>Dr. Kunal Oswal</h4>
              <p className="qualification">
                MBBS, MS, DNB (General and laparoscopic Surgery)
              </p>
            </div>
          </div>

          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="director-card">
              <img
                className="img-fluid aimg"
                src="https://paarasmanihospital.com/img/doctor.webp"
                alt="Laparoscopic Surgery in Pune"
              />
              <h4>Dr. Nivedita Oswal</h4>
              <p className="qualification">
                MBBS, DNB - Paediatrics, Diploma in Child Health (DCH)
                Pediatrician
              </p>
            </div>
          </div>
        </div>

        <center>
          <div className="link">
            <a href="/about-docter" className="theme-btn btn-style-four our">
              View Profile
            </a>
          </div>
        </center>
      </div>
    </div>
  );
};

export default DirectorsSection;
