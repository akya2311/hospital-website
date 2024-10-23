import React from 'react';
import './SpecialityCard.css';

const SpecialityCard = ({ imageSrc, iconClass, title, link, description }) => {
  return (
    <div className="featured-service col-md-4 col-sm-6 col-xs-12">
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <a href={link}>
              <img src={imageSrc} alt={title} />
            </a>
          </figure>
          <div className="caption-box">
            <div className="icon">
              <span className={iconClass}></span>
            </div>
            <h4 className="title">
              <a href={link}>{title}</a>
            </h4>
          </div>
          <div className="overlay-box">
            <div className="icon-box">
              <span className={iconClass}></span>
            </div>
            <div className="overlay-inner">
              <div className="overlay-content">
                <h4 className="title">
                  <a href={link}>{title}</a>
                </h4>
                <div className="text">{description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialityCard;
