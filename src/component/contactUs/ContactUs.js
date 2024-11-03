import React, { useState } from 'react';
import './ContactUs.css'; // Adjust the path as necessary
import CommonBannerComponent from '../commonBannerComponent/CommonBannerComponent';
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent successfully!');
        // Here you could also add form submission logic, like calling an API
        setFormData({
            name: '',
            email: '',
            mobile: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
        <CommonBannerComponent name='Read More' />
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    {/* Address Column */}
                    <div className="col-lg-4 contact-card">
                        <div className="h-100 bg-light rounded d-flex align-items-center p-5 card">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: '55px', height: '55px' }}>
                                <i className="fa fa-map-marker text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2 text-white card-header">Address</p>
                                <p className="mb-0 text-white card-text">Palacino Apartment, Ground floor (C+D wing Near Mahesh Bank, First turn after HDFC Bank/ Mittal jewelers, Solapur - Pune Hwy, behind Vaibhav theater, Hadapsar, Pune, Maharashtra 411028)</p>
                            </div>
                        </div>
                    </div>

                    {/* Phone Column */}
                    <div className="col-lg-4">
                        <div className="h-100 bg-light rounded d-flex align-items-center p-5 card">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: '55px', height: '55px' }}>
                                <i className="fa fa-phone text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2 text-white card-header">Call Us Now</p>
                                <h5 className="mb-0 text-white card-text text-decoretion-none" ><a href="tel:9595703307" style={{ textDecoration: 'none' }}>9595703307</a></h5>
                            </div>
                        </div>
                    </div>

                    {/* Email Column */}
                    <div className="col-lg-4">
                        <div className="h-100 bg-light rounded d-flex align-items-center p-5 card">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: '55px', height: '55px' }}>
                                <i className="fa fa-envelope text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2 text-white card-header">Mail Us Now</p>
                                <h5 className="mb-0 card-text"><a href="mailto:paarasmanihospital20@gmail.com" style={{ textDecoration: 'none' }}>paarasmanihospital20@gmail.com</a></h5>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="bg-light rounded p-5 contact-card">
                            <p className="d-inline-block border rounded-pill py-1 px-4 form-text">Contact Us</p>
                            <h2 className="mb-4 card-header">Have Any Query? Please Contact Us!</h2>
                            <p className="mb-4 form-text">Paarasmani Hospital is Highly Equipped with latest Technologies. Our Hospital is a top player in the category of General and Laparoscopy surgery in Pune. This well-known establishment acts as a one-stop destination servicing Patients both local and from other parts of Pune.</p>
                            <form action="" method="post" className='contact-card' onSubmit={handleSubmit}>
                                <div className="row g-3 contact-card">
                                    <div className="col-md-6 ml-3">
                                        <div className="form-floating">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required onChange={handleChange} value={formData.name} />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ml-3">
                                        <div className="form-floating">
                                            <input type="email" name="email" className="form-control" id="email" placeholder="Your Email" required onChange={handleChange} value={formData.email} />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" name="mobile" className="form-control" id="mobile" placeholder="Phone" required onChange={handleChange} value={formData.mobile} />
                                            <label htmlFor="mobile">Phone</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" required onChange={handleChange} value={formData.subject} />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea name="message" className="form-control" placeholder="Leave a message here" id="message" style={{ height: '100px' }} required onChange={handleChange} value={formData.message}></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>

                                    {/* reCAPTCHA (Remove the div wrapper) */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3 abtn" name="sub" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="bg-light rounded p-5">
                            <p className="d-inline-block border rounded-pill py-1 px-4 text-primary">Location</p>
                            <h2 className="mb-4 text-white">Our Location</h2>
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14609028.40889075!2d73.74264961075508!3d19.179696029485174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f9fd98e8e859%3A0x8158cc94f7cf0c3d!2sPaarasmani%20Hospital!5e0!3m2!1sen!2sin!4v1696095201878!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ContactUs;
