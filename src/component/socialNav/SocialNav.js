import React from 'react';
import './SocialNav.css'; // Make sure this path is correct

const SocialNav = () => {
  const socialLinks = [
    {
        href: 'https://www.facebook.com/Hadapsar028',
      imgSrc: 'https://paarasmanihospital.com/img/facebook.jpeg',
      alt: 'Facebook',
    },
    {
      href: 'https://www.instagram.com/paarasmani_hospital/',
      imgSrc: 'https://paarasmanihospital.com/img/instagram.jpeg',
      alt: 'Instagram',
    },
    {
      href: 'https://www.linkedin.com/company/97851284/admin/feed/posts/',
      imgSrc: 'https://paarasmanihospital.com/img/linkedin.jpeg',
      alt: 'LinkedIn',
    },
    {
      href: 'https://www.youtube.com/@paarasmanihospitalhadapsar603',
      imgSrc: 'https://paarasmanihospital.com/img/youtube.jpeg',
      alt: 'YouTube',
    },
    {
      href: 'https://api.whatsapp.com/send?phone=+919373052161&amp;text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.',
      imgSrc: 'https://paarasmanihospital.com/img/whatsapp.jpeg',
      alt: 'WhatsApp',
    },
  ];

  return (
    <div className="socialNav">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          <img className="w-100" src={link.imgSrc} alt={link.alt} />
        </a>
      ))}
    </div>
  );
};

export default SocialNav;
