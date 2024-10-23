import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerItem.css'; // Custom styles if needed

const BannerItem = () => {
  const settings = {
    dots: false, // Show dots for navigation
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="slick-demo" className="slick-carousel">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://paarasmanihospital.com/img/Parasmani-Hospital-Web-Banner-01%20new%20(2)%20(2).webp"
            alt="Laparoscopic Surgeons in Pune"
          />
        </div>
        <div className="item">
          <img
            src="https://paarasmanihospital.com/img/Parasmani-Hospital-Web-Banner-2%20new%20(1)%20(1).webp"
            alt="Urology in Pune"
          />
        </div>
        <div className="item">
          <img
            src="https://paarasmanihospital.com/img/Parasmani-Hospital-Web-Banner-2%20new%20(1)%20(1).webp"
            alt="Urology in Pune"
          />
        </div>
        <div className="item">
          <img
            src="https://paarasmanihospital.com/img/Parasmani-Hospital-Web-Banner-01%20new%20(2)%20(2).webp"
            alt="Laparoscopic Surgeons in Pune"
          />
        </div>
      
      </Slider>
    </div>
  );
};

export default BannerItem;
