import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderSection.css"; // Import your custom CSS

const SliderSection = () => {
  const settings = {
    dots: false,
    arrows: false, 
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slidesData = [
    { src: "https://paarasmanihospital.com/img/1_1%20(1).webp", title: "Paediatric surgeries", count: 250 },
    { src: "https://paarasmanihospital.com/img/6.jpg", title: "Inguinal hernia", count: 1500 },
    { src: "https://paarasmanihospital.com/img/5.jpg", title: "Gall bladder removal", count: 1200 },
    { src: "https://paarasmanihospital.com/img/4.jpg", title: "Plastic Surgeries", count: 50 },
    { src: "https://paarasmanihospital.com/img/3.jpg", title: "Appendix Removal", count: 2000 },
    { src: "https://paarasmanihospital.com/img/2.jpg", title: "Piles and fissures", count: 2500 },
    { src: "https://paarasmanihospital.com/img/7.jpg", title: "Hysterectomies", count: 1500 },
    { src: "https://paarasmanihospital.com/img/8.jpg", title: "Sutureless surgeries", count: 5000 },
  ];

  return (
    <section className="customer-logos slider pb-5 newbk">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slide acases">
            <img src={slide.src} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <h5 className="slide-title">
                {slide.title} : {slide.count}
              </h5>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderSection;







