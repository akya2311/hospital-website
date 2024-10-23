import React from 'react';
import './Gallery.css'; // Make sure to include your custom styles
import CommonBannerComponent from '../commonBannerComponent/CommonBannerComponent';
const galleryImages = [
    'https://paarasmanihospital.com/img/Hernia-Surgery%20(1).webp',
    'https://paarasmanihospital.com/img/Laparoscopic-Surgery.jpg',
    'https://paarasmanihospital.com/img/gallery-11.jpg',
    'https://paarasmanihospital.com/img/gallery-10.jpg',
    'https://paarasmanihospital.com/img/gallery-9.jpg',
    'https://paarasmanihospital.com/img/gallery-7.jpg',
    'https://paarasmanihospital.com/img/gallery-6.jpg',
    'https://paarasmanihospital.com/img/gallery-5.jpg',
    'https://paarasmanihospital.com/img/gallery-4.jpg',
    'https://paarasmanihospital.com/img/gallery-3.jpg',
    'https://paarasmanihospital.com/img/gallery-1.jpg',
    
  ];
const Gallery = () => {
    
  

  return (
    <>
 <CommonBannerComponent name='Image Gallery'/>
    <div className="container-fluid">
      <div className="row gallery">
        {galleryImages.map((image, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 pt-5">
            <a href={image}>
              <img className="img-fluid gallery-img" src={image} alt={`Gallery ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
 
};

export default Gallery;
