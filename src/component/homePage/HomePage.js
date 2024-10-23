
import BannerItem from '../bannerItem/BannerItem';
import ChatWidget from '../chatWidget/ChatWidget';
import AboutHospital from '../aboutHospital/AboutHospital';
import TestimonialSection from '../testimonialSection/TestimonialSection';
import OurSpecialities from '../ourSpecialities/OurSpecialities';
import HealthcareFacilities from '../healthcareFacilities/HealthcareFacilities';
import ParallaxSection from '../parallaxSection/ParallaxSection';
import SuccessfulCases from '../successfulCases/SuccessfulCases';
import DirectorsSection from '../directorsSection/DirectorsSection';
import PatientsSection from '../patientsSection/PatientsSection';

const HomePage = () => {
    return (
        <>
        <BannerItem />
        <ChatWidget />
        <AboutHospital />
        <TestimonialSection />
        <OurSpecialities />
        <HealthcareFacilities />
        <ParallaxSection />
        <SuccessfulCases />
        <DirectorsSection />
        <PatientsSection/>
        
        </>
    );
};

export default HomePage;