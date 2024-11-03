import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark text-light py-5">
                <div className="container">
                    <div className="row footer-content">
                        <div className="col-lg-3 col-md-6 mb-4 footer-section">
                            <img
                                className="img-fluid footer-logo mb-3"
                                src="https://paarasmanihospital.com/img/Paarasmani-logo1%20(1)%20(1).webp"
                                alt="Paarasmani Hospital in Pune, Hadapsar"
                            />
                            <p className="footer-description">
                                Paarasmani Hospital is highly equipped with the latest technologies. Our
                                hospital is a top player in the category of General and Laparoscopy surgery
                                in Pune. This well-known establishment acts as a one-stop destination,
                                servicing patients both locally and from other parts of Pune.
                            </p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://maps.app.goo.gl/5SQBMqF6E959bPhPA"
                            >
                                <img
                                    loading="lazy"
                                    className="google-review-logo"
                                    src="https://paarasmanihospital.com/img/google-review-removebg-preview.png"
                                    alt="Google Review"
                                />
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 footer-section">
                            <h5 className="heading mb-4">Services</h5>
                            {[
                                "Infectious Disease Treatment",
                                "Consultant Physicians",
                                "Best Plastic Surgeons",
                                "Best Proctology Clinic",
                                "Varicocele Surgery Doctors",
                                "Best Thyroid Surgeons",
                                "Abdominal & Appendix Surgery",
                                "Colonoscopy & Colorectal Specialists",
                                "Best Cancer Hospital",
                                "Liver Transplant Surgery",
                                "Diabetic Foot Ulcer Surgery",
                                "Internal Medicine Hospital Diagnosis & Treatment in Pune"
                            ].map(service => (
                                <a key={service} className="btn btn-link text-light" href={service.replace(/\s+/g, '-').toLowerCase() + '-in-pune.php'}>
                                     <i className="fa fa-chevron-right bi-chevron-compact-right" style={{ fontSize: '13px', fontWeight: 'bold' }}></i>
                                    {service}
                                </a>
                            ))}
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 footer-section">
                            <h5 className="heading mb-4">Services</h5>
                            {[
                                "Laparoscopy",
                                "Urology",
                                "Gastroenterology",
                                "Endoscopy",
                                "Gynaec Laparoscopy Surgery",
                                "Obesity Surgery",
                                "Hernia/Piles/Fissures & Other Anorectal Problems",
                                "Anal Fissure Treatment",
                                "Anal Fistula Treatment",
                                "Piles Specialist Doctor",
                                "Hernia Specialist"
                            ].map(service => (
                                <a key={service} className="btn btn-link text-light link-text" href={service.replace(/\s+/g, '-').toLowerCase() + '-in-pune.php'}>
                                    <i className="fa fa-chevron-right bi-chevron-compact-right" style={{ fontSize: '13px', fontWeight: 'bold' }}></i>

                                    {service}
                                </a>
                            ))}
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 footer-section">
                            <h5 className="heading mb-4">Address</h5>
                            <p className="mb-2 text-white">
                                <i className="fa fa-map-marker me-3"></i>
                                Palacino Apartment, Ground floor (C+D wing Near Mahesh Bank, First turn after HDFC Bank/Mittal Jewelers, Solapur - Pune Hwy, behind Vaibhav theater, Hadapsar, Pune, Maharashtra 411028
                            </p>

                            <p className="mb-2">
                                <button type="button" className="btn btn-success">
                                    <i className="fa fa-phone me-3"></i>
                                    <a className="text-white" href="tel:9595703307">9595703307</a>
                                </button>
                            </p>

                            <p className="mb-2">
                                <i className="fa fa-envelope me-3 text-white"></i>
                                <a className="text-white" href="mailto:paarasmanihospital20@gmail.com">paarasmanihospital20@gmail.com</a>
                            </p>

                            <div className="d-flex flex-wrap justify-content-center icon-section pt-2">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-light btn-social rounded-circle me-2 mb-2"
                                    href="https://www.facebook.com/Hadapsar028"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-light btn-social rounded-circle me-2 mb-2"
                                    href="https://www.linkedin.com/company/97851284/admin/feed/posts/"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>

                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-light btn-social rounded-circle me-2 mb-2"
                                    href="https://www.instagram.com/kunalthesurgeon/"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>

                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-light btn-social rounded-circle mb-2"
                                    href="https://www.youtube.com/@paarasmanihospitalhadapsar603"
                                >
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
            <div className="container-fluid w-100 bg-dark ">
                <div className="copyright py-4 text-center text-md-start ">
                    <p className="mb-0 text-white ms-3 ">
                        © <a className="text-decoration-none text-white" href="https://paarasmanihospital.com/">Paarasmani Hospital</a>, All Rights Reserved. |
                        <span className="ms-2">Expand Your Network</span>
                    </p>
                </div>
            </div>


        </>

    );
};

export default Footer;
