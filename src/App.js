import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import HomePage from './component/homePage/HomePage';
import Footer from './component/footer/Footer';
import Insurance from './component/insurance/Insurance';
import ContactUs from './component/contactUs/ContactUs';
import TabContent from './component/tabContent/TabContent';
import AboutHospitalAndDocter from './component/aboutHospitalAndDocter/AboutHospitalAndDocter';
import AboutDocter from './component/aboutDocter/AboutDocter';
import SocialNav from './component/socialNav/SocialNav';
import Whatsapp from './component/whatsapp/Whatsapp';
import Testimonial from './component/testimonial/Testimonial';
import Gallery from './component/gallery/Gallery';
import VaccinationGallery from './component/gallery/VaccinationGallery';
import Contact from './component/contact/Contact';


const App = () => {
  return (
      <Router>
        <Contact/>
        <Header />
        <SocialNav />
        <Whatsapp />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/patientstories" element={<TabContent />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/about-hospital" element={<AboutHospitalAndDocter />} />
          <Route path="/about-docter" element={<AboutDocter />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/vaccinationGallery" element={<VaccinationGallery />} />
        </Routes>
        
        <Footer />
      </Router>
  );
};

export default App;
