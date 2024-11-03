
import React from 'react';
import './AboutHospital.css';

const AboutHospital = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-start"> {/* Change to align-items-start for top alignment */}
          {/* Left Column with Video and Image */}
          <div className="col-lg-6 d-flex flex-column wow fadeIn" data-wow-delay="0.1s">
            <iframe
              className="mb-3"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/SfNTvscZtps?si=8RY0PpeseAMVh4Ei"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <img
              className="fluid-img rounded abb" // Removed w-50 to make the image full-width
              src="https://paarasmanihospital.com/img/about22.jpg"
              alt="Laparoscopic Surgery Specialist in Hadapsar Gadital"
            />
          </div>

          {/* Right Column with Text Content */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <p className="d-inline-block border rounded-pill py-1 px-4 aaborder">About Us</p>
            <h1 className="mb-4">Paarasmani Hospital</h1>

            <p>
              Paarasmani Hospital is highly equipped with the latest technologies. Our Hospital is a top player in the category of{' '}
              <u>
                <a href="https://maps.app.goo.gl/TzKEE7QGyN7N5ukn6">General and Laparoscopy Surgery in Pune.</a>
              </u>
              {' '}This well-known establishment acts as a one-stop destination servicing patients both local and from other parts of Pune.
            </p>
            <p className="mb-4">
              Over the course of its journey, this hospital has established a firm foothold in its industry. The belief that patient satisfaction is as important as their services has helped this establishment garner a vast base of patients, which continues to grow by the day.
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg> Cashless Medical Facility
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg> Medical Insurance
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg> Medi Assist Healthcare Services
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg> FHPL Family Health Plan Insurance TPA Limited
            </p>
            <a className="btn btn-primary rounded-pill  py-3 px-5 mt-3 abtn2" href="/read-more">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHospital;
