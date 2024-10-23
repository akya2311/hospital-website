import React from 'react';
import './TestimonialSection.css';

const Img = ({ src, alt, width, height }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="responsive-img"
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

export default Img;
