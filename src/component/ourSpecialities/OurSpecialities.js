import React from 'react';
import './OurSpecialities.css'; // Optional: For custom styling

const OurSpecialities = () => {
  const cardsData = [
    {
      id: 1,
      title: "Laparoscopy Surgery",
      description: "Laparoscopy, commonly referred to as minimally invasive surgery or keyhole surgery",
      imageUrl: "https://paarasmanihospital.com/img/Laparoscopic-Surgery.jpg",
    },
    {
      id: 2,
      title: "Urology",
      description: "We take pride in providing a comprehensive and specialist urology clinic at Paarasmani Hospital.",
      imageUrl: "https://paarasmanihospital.com/img/urology.jpg",
    },
    {
      id: 3,
      title: "Gastroenterology",
      description: "Paarasmani Hospital, located in Pune, is known for providing comprehensive medical care in various specialties, including",
      imageUrl: "https://paarasmanihospital.com/img/gastroenterology%20(1)%20(1)%20(1).webp",
    },
    {
      id: 4,
      title: "Endoscopy",
      description: "Welcome to Paarasmani Hospital, the forefront of endoscopy treatment and diagn",
      imageUrl: "https://paarasmanihospital.com/img/endoscopy%20(1).webp",
    },
    {
      id: 5,
      title: "Gynaec Laparoscopy Surgery",
      description: "Paarasmani Hospital is one of the leading medical facilities in Pune known for its expertise in gynecological laparoscopic surgery.",
      imageUrl: "https://paarasmanihospital.com/img/gyno-Laparoscopic-Surgery.jpg",
    },
    {
      id: 6,
      title: "Obesity Surgery",
      description: "obesity surgeon, also known as a bariatric surgeon, specializes in performing surgical procedures to help patients manage obesity and achieve weight loss",
      imageUrl: "https://paarasmanihospital.com/img/weightloss-surgery%20(1).webp",
    },
    {
      id: 7,
      title: "Hernia/Piles/Fissures & Other Anorectal Problems",
      description: "The Department of General Surgery at Aayush Multispecility Hospital focuses on abdominal organs such as pancreas,",
      imageUrl: "https://paarasmanihospital.com/img/Hernia-Surgery%20(1).webp",
    },
    {
      id: 8,
      title: "Gynaec Laparoscopic (Keyhole/ Scarless) Surgery",
      description: "where we take great satisfaction in providing state-of-the-art medical care and skilled surgical treatment. Laparoscopic (Keyhole/Scarless) Surgery",
      imageUrl: "https://paarasmanihospital.com/img/Laparoscopic-Surgery.jpg",
    },
  ];

  return (
    <div className="container">
      <div className="sec-title text-center">
            <h2 className="afot">
                Our Specialities
            </h2>
            <span>What We Do</span>
        </div>
      <div className="row">
        {cardsData.map(card => (
          <div className="col-md-4 mb-4" key={card.id}>
            <div className="card position-relative">
              <img src={card.imageUrl} alt={card.title} className="card-img-top" />
              <div className="card-overlay">
                <div className="icon-container">
                  <span className="icon">👨‍⚕</span>
                </div>

                <div className="text">{card.title}</div>
              </div>
              <div className="hover-content">
                <span className="icon">👨‍⚕</span>
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecialities;
