

import AboutHospital from '../aboutHospital/AboutHospital';
import DirectorsSection from '../directorsSection/DirectorsSection';
import CommonBannerComponent from '../commonBannerComponent/CommonBannerComponent';

const AboutHospitalAndDocter = () =>{
    return(
        <>
            <CommonBannerComponent name='About Hospital' />
            <AboutHospital/>
            <DirectorsSection/>
            
        </>
    )
}

export default AboutHospitalAndDocter;