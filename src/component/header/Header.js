

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };


  const majorServices = [
    { id: 1, name: 'Laparoscopy', href: '/#' },
    { id: 2, name: 'Laparoscopic (Keyhole/Scarless) Surgery', href: '/#' },
    { id: 3, name: 'Urology', href: '/#' },
    { id: 4, name: 'Gastroenterology', href: '/#' },
    { id: 5, name: 'Endoscopy', href: '/#' },
    { id: 6, name: 'Gynaec Laparoscopy Surgery', href: '/#' },
    { id: 7, name: 'Obesity Surgery', href: '/#' },
    { id: 8, name: 'Hernia/Piles/Fissures & Other Anorectal Problems', href: '/#' },
  ];


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
        <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary">
            <img id="parasmani1" className="img-fluid" src="https://paarasmanihospital.com/img/Paarasmani-logo1%20(2)%20(2).png" alt="Paarasmani Hospital in Pune, Hadpsar" />
          </h2>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          onClick={handleNavbarToggle}
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link active">Home</a>
            <div className="nav-item dropdown">
              <a href="about.php" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">About</a>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <a href="/about-hospital" className="dropdown-item">About Hospital</a>
                <a href="/about-docter" className="dropdown-item">About Doctor</a>
              </div>
            </div>

            <div className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Our Major Service</button>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                {majorServices.map(service => (
                  <a key={service.id} href={service.href} className="dropdown-item">
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">More</button>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <a href="/testimonial" className="dropdown-item">Testimonials</a>
                <a href="/gallery" className="dropdown-item">Image Gallery</a>
                <a href="#" className="dropdown-item">Video Gallery</a>
                <a href="/vaccinationGallery" className="dropdown-item">Vaccination</a>
                <a href="#" className="dropdown-item">Blog</a>
              </div>
            </div>

            <a href="/patientstories" className="nav-item nav-link">Patient Stories</a>
          </div>
          <a href="/contactUs" className="contact-button rounded-0 py-4 px-lg-5 d-none d-lg-block abtn2">Contact<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
      </nav>
      
    </>
  );
};

export default Header;
