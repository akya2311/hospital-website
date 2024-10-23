import React from 'react';
import './TestimonialSection.css';

const imageData = [
  { src: "https://paarasmanihospital.com/img/2%20(1).png", alt: "Best Laparoscopic Surgery Hospital in Pune", width: 180, height: 109 },
  { src: "https://paarasmanihospital.com/img/3.png", alt: "Laparoscopic Surgery Specialist in Manjri", width: 180, height: 180 },
  { src: "https://paarasmanihospital.com/img/4.png", alt: "Mediassist Care in Pune", width: 180, height: 180 },
  { src: "https://paarasmanihospital.com/img/download.webp", alt: "Best Internal Medicine Physician Doctors in Pune", width: 180, height: 180 },
  { src: "https://paarasmanihospital.com/img/6%20(1).png", alt: "Aesthetic Plastic Surgery in Pune", width: 180, height: 180 },
  { src: "https://paarasmanihospital.com/img/medi-assit.jpg", alt: "Varicocele Surgery & Treatment in Pune", width: 180, height: 180 },
  { src: "https://paarasmanihospital.com/img/care-health.jpg", alt: "Varicocele Surgery & Treatment in Pune", width: 180, height: 180 },
  { src: "https://paarasmanihospital.com/img/ewa.jpg", alt: "Varicocele Surgery & Treatment in Pune", width: 180, height: 180 },
  { src: "https://paarasmanihospital.com/img/fhpl.jpg", alt: "Varicocele Surgery & Treatment in Pune", width: 180, height: 180 },
  { src: "https://paarasmanihospital.com/img/hdfc.jpg", alt: "Varicocele Surgery & Treatment in Pune", width: 180, height: 180 },
  { src: "https://paarasmanihospital.com/img/relience.jpg", alt: "Varicocele Surgery & Treatment in Pune", width: 180, height: 180 },
  { src: "https://paarasmanihospital.com/img/bajaj.jpg", alt: "Varicocele Surgery & Treatment in Pune", width: 180, height: 180 },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="sec-title text-center">
          <h2 className="afot text-white">Our Tie Up With Insurance Companies</h2>
        </div>
        <div className="scroll-container">
          <div className="scroll-content">
            {imageData.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="insurance-img"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
