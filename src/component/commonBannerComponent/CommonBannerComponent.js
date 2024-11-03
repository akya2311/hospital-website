import React from 'react';
import './CommonBannerComponent.css';
const CommonBannerComponent = ({ name }) => {
  return (
    
    <div className="container-fluid page-header py-5 mb-5 fadeIn" style={{ animationDelay: "0.1s" }}>
      <div className="container py-5">
        <h1 className="display-3 text-white mb-3 slideInDown">{name}</h1>
      </div>
      
    </div>
  
  );
};

export default CommonBannerComponent;
