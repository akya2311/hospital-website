import React from "react";
import "./DoctersDetails.css"; // Custom CSS for this component

const DoctersDetails = () => {
  return (
    <div className="container-xxl py-5 directors-section">
      <div className="container">
        <div className="text-center mx-auto mb-5 fadeInUp" style={{ maxWidth: "600px" }}>
          <h1 className="section-title">Our Directors</h1>
        </div>
        <div className="row g-5">
          {/* Dr. Kunal Oswal */}
          <div className="col-lg-5 fadeIn">
            <div className="d-flex flex-column">
              <img
                className="img-fluid aimg"
                src="https://paarasmanihospital.com/img/about22.jpg"
                alt="Laparoscopic Surgeons in Pune"
              />
            </div>
          </div>
          <div className="col-lg-6 fadeIn">
            <h1 className="director-name">
              <a href="https://maps.app.goo.gl/TzKEE7QGyN7N5ukn6" className="director-link">
                Dr. Kunal Oswal
              </a>
            </h1>
            <p className="qualification">MBBS, MS, DNB (General and Laparoscopic Surgery)</p>
            <p className="bio">
              Dr. Kunal Oswal completed his training of DNB (General Surgery) from prestigious KEM
              Hospital, Pune. He has gained extensive experience in advanced laparoscopy,
              gastrointestinal and HPB surgery, along with oncosurgery. Over the past 15 years, he
              has performed hundreds of laparoscopic and open procedures...
            </p>
            <a
              className="btn btn-primary  py-3 px-4 mt-3 rounded-pill appointment-btn"
              href="contact.php"
            >
              Make Appointment
            </a>
          </div>

          {/* Dr. Nivedita Oswal */}
          <div className="col-lg-6 fadeIn">
            <h1 className="director-name">Dr. Nivedita Oswal</h1>
            <p className="qualification">MBBS, DNB - Paediatrics, Diploma in Child Health (DCH)</p>
            <p className="bio">
              Dr. Nivedita Oswal is a pediatrician and neonatologist in Hadapsar, Pune, with 11
              years of experience in these fields. She practices at Rainbow Children's Clinic and
              Vaccination Center. She completed MBBS from Grant Medical College, JJ Group of
              Hospitals Mumbai in 2004 and DNB (Pediatrics) from the National Board of Examinations,
              New Delhi in 2012...
            </p>
            <a
              className="btn btn-primary py-3 px-4 mt-3 rounded-pill appointment-btn"
              href="contact.php"
            >
              Make Appointment
            </a>
          </div>
          <div className="col-lg-5 fadeIn">
            <div className="d-flex flex-column">
              <img
                className="img-fluid aimg"
                src="https://paarasmanihospital.com/img/doctor.webp"
                alt="Pediatrician in Pune"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctersDetails;
