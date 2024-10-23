import React from 'react';
import './VaccinationGallery.css'; // Custom styles for gallery
import CommonBannerComponent from '../commonBannerComponent/CommonBannerComponent';
const VaccinationGallery = () => {
  const galleryImages = [
    'https://paarasmanihospital.com/img/vaccination-1.jpg',
    'https://paarasmanihospital.com/img/vaccination-2.jpg',
    'https://paarasmanihospital.com/img/vaccination-3.jpg',
    'https://paarasmanihospital.com/img/vaccination-3.jpg',
  ];

  return (
    <>
    <CommonBannerComponent name= 'Vaccination'/>
    <div className="container-fluid gallery-container">
      <div className="row gallery">
        {galleryImages.map((image, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 pt-5">
            <a href={image} className="gallery-link">
              <img className="img-fluid gallery-img" src={image} alt={`Vaccination ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default VaccinationGallery;
