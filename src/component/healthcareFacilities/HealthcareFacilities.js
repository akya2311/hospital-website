import React from 'react';
import './HealthcareFacilities.css'; // Import the CSS file

const HealthcareFacilities = () => {
  return (

    <div className='bg-container'>
      <div className="p-lg-5 ps-lg-0 details-container">
        <div className='details-container2'>
          <p className="d-inline-block border rounded-pill text-light py-1 px-4 aaborder">Features</p>
          <h3 className="text-white mb-4 afot">Other Healthcare Facilities</h3>
          <p className="text-white mb-4 pb-2">
            Provide quality healthcare to all, Achieve professional excellence in healthcare,
            Adhere to national &amp; global standards in healthcare, Ensure care with integrity and ethics.
          </p>

          <div className="row g-4">
            <div className="col-lg-6 col-sm-12">
              <div className="d-flex align-items-center">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light1 afac">
                  <i className="fa fa-user-md text-primary"></i>
                </div>
                <div className="ms-4">
                  <p className="text-white mb-2">Experience</p>
                  <h5 className="text-white mb-0">Doctors</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="d-flex align-items-center">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light1 afac">
                  <i className="fa fa-check text-primary"></i>
                </div>
                <div className="ms-4">
                  <p className="text-white mb-2">Quality</p>
                  <h5 className="text-white mb-0">Services</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="d-flex align-items-center">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light1 afac">
                  <i className="fa fa-comment-medical text-primary"></i>
                </div>
                <div className="ms-4">
                  <p className="text-white mb-2">Positive</p>
                  <h5 className="text-white mb-0">Team Work</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="d-flex align-items-center">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light1 afac">
                  <i className="fa fa-headphones text-primary"></i>
                </div>
                <div className="ms-4">
                  <p className="text-white mb-2">24 Hours</p>
                  <h5 className="text-white mb-0">Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-12 img-container">
          <img
            className="img-fluid"
            src="https://paarasmanihospital.com/img/why-choose%20(1).webp"
            alt="Healthcare facilities"
          />
        </div>


    </div>

  )


}

export default HealthcareFacilities;
