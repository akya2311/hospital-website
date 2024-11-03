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
      description: "Paarasmani Hospital, located in Pune, is known for providing comprehensive medical care in various specialties, including Gastroenterology",
      imageUrl: "https://paarasmanihospital.com/img/gastroenterology%20(1)%20(1)%20(1).webp",
    },
    {
        id: 4,
        title: "Endoscopy",
        description: "Welcome to Paarasmani Hospital, the forefront of endoscopy treatment and diagnostics in Pune.",
        imageUrl: "https://paarasmanihospital.com/img/endoscopy%20(1).webp",
        link: "endoscopy-in-pune.php",
    },
    {
        id: 5,
        title: "Gynaec Laparoscopy Surgery",
        description: "Paarasmani Hospital is one of the leading medical facilities in Pune known for its expertise in gynecological laparoscopic surgery.",
        imageUrl: "https://paarasmanihospital.com/img/gyno-Laparoscopic-Surgery.jpg",
        link: "gynaec-laparoscopic-surgeon-in-pune.php",
    },
    {
        id: 6,
        title: "Obesity Surgery",
        description: "Obesity surgeon, also known as a bariatric surgeon, specializes in performing surgical procedures to help patients manage obesity and achieve weight loss.",
        imageUrl: "https://paarasmanihospital.com/img/weightloss-surgery%20(1).webp",
        link: "obesity-surgery-in-pune.php",
    },
    {
        id: 7,
        title: "Hernia/Piles/Fissures ",
        description: "The Department of General Surgery at Paarasmani Hospital focuses on abdominal organs such as pancreas.",
        imageUrl: "https://paarasmanihospital.com/img/Hernia-Surgery%20(1).webp",
        link: "#", // Update the link as necessary
    },
];


  return (
    <div className="container">
      <div className="sec-title text-center">
        <h2 className="afot">Our Specialities</h2>
        <span>What We Do</span>
      </div>
      <div className="row">
        {cardsData.map((card) => (
          <div className="col-md-4 mb-4" key={card.id}>
            <div className="featured-service">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <a href="#">
                      <img src={card.imageUrl} alt={card.title} />
                    </a>
                  </figure>
                  <div className="caption-box">
                    <div className="icon">
                      <span className="fa fa-user-md"></span>
                    </div>
                    <h4 className="title">
                      <a href="#">{card.title}</a>
                    </h4>
                  </div>
                  <div className="overlay-box">
                    <div className="icon-box">
                      <span className="fa fa-user-md"></span>
                    </div>
                    <div className="overlay-inner">
                      <div className="overlay-content">
                        <h4 className="title">
                          <a href="#">{card.title}</a>
                        </h4>
                        <div className="text">{card.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecialities;
