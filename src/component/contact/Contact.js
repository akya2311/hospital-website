import React from 'react';
import './Contact.css'; // Import CSS for custom styling

function Contact() {
  return (
    <div className="contact-bg-container row gx-0 d-none d-lg-flex">
      {/* Left Section with Insurance and Pay Online buttons */}
      <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="acolor">
            <button type="button" className="btn btn-primary abtn1">
              <a href="http://localhost:3000/insurance" className="text-white">Insurance</a>
            </button>
          </small>
        </div>
        <div className="h-100 d-inline-flex align-items-center py-3">
          <small className="acolor">
            <button type="button" className="btn btn-primary abtn1" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Pay Online
            </button>
          </small>
        </div>
      </div>

      {/* Right Section with WhatsApp and Phone buttons */}
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="acolor">
            <a href="https://api.whatsapp.com/send?phone=+919373052161&amp;text=Paarasmani Hospital" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-primary abtn1">
                <small className="fa fa-whatsapp me-2 text-white"></small> WhatsApp
              </button>
            </a>
          </small>
        </div>
        
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="acolor">
            <a href="tel:+919595703307">
              <button type="button" className="btn btn-primary abtn1">
                <small className="fa fa-phone me-2 text-white"></small> +91 9595703307
              </button>
            </a>
          </small>
        </div>
        
        {/* Uncomment and add social media links if needed */}
        {/* <div className="h-100 d-inline-flex align-items-center"> */}
        {/* <a target="_blank" className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="https://www.facebook.com/Hadapsar028"><i className="fab fa-facebook-f"></i></a> */}
        {/* <a target="_blank" className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="https://www.linkedin.com/company/97851284/admin/feed/posts/"><i className="fab fa-linkedin-in"></i></a> */}
        {/* <a target="_blank" className="btn btn-sm-square rounded-circle bg-white text-primary me-0" href="https://www.instagram.com/kunalthesurgeon/"><i className="fab fa-instagram"></i></a> */}
        {/* <a target="_blank" className="btn btn-sm-square rounded-circle bg-white text-primary me-0 asocial" href="https://www.youtube.com/@paarasmanihospitalhadapsar603"><i className="fab fa-youtube"></i></a> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Contact;
