import React from "react";
import "./ReadMore.css";
import DoctersDetails from '../doctersDetails/DoctersDetails';
import CommonBannerComponent from '../commonBannerComponent/CommonBannerComponent';
const ReadMore = () => {
  return (
    <>
    <CommonBannerComponent name='Read More' />
    <div className="container-xxl py-5 read-more">
      <div className="container">
        <div className="row g-5 align-items-start"> {/* Change to align-items-start for top alignment */}
          {/* Left Column with Video and Image */}
          <div className="col-lg-6 d-flex flex-column wow fadeIn" data-wow-delay="0.1s">
            <iframe
              className="mb-3"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/SfNTvscZtps?si=8RY0PpeseAMVh4Ei"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <img
              className="fluid-img rounded abb" // Removed w-50 to make the image full-width
              src="https://paarasmanihospital.com/img/about22.jpg"
              alt="Laparoscopic Surgery Specialist in Hadapsar Gadital"
            />
          </div>

          {/* Right Column with Text Content */}
          <div className="col-lg-6 text-column">
            <p className="badge-text">About Hospital</p>
            <h2 className="hospital-title">Paarasmani Hospital</h2>
            <p>
              <a href="https://maps.app.goo.gl/TzKEE7QGyN7N5ukn6">
                <u>Paarasmani Hospital</u>
              </a>{" "}
              is Highly Equipped with latest Technologies. Our Hospital is a top
              player in the category of{" "}
              <a href="https://maps.app.goo.gl/TzKEE7QGyN7N5ukn6">
                <u>General and Laparoscopy Surgery In Pune.</u>
              </a>{" "}
              This well-known establishment acts as a one-stop destination
              servicing Patients both local and from other parts of Pune.
            </p>
            <p className="mb-4">
              Over the course of its journey, This Hospital has established a
              firm foothold in it’s industry. The belief that Patients
              satisfaction is as important as their services, have helped this
              establishment garner a vast base of Patients, which continues to
              grow by the day.
            </p>
            <p>
              This business employs individuals that are dedicated towards their
              respective roles and put in a lot of effort to achieve the common
              vision and larger goals of the Hospital. In the near future, this
              Hospital aims to expand its line of services and cater to a larger
              patients base In Pune.
            </p>
            <a
              className="btn btn-primary  py-3 px-4 mt-3 text-decoration-none rounded-pill appointment-button"
              href="contact.php"
            >
              Make Appointment
            </a>




          </div>
        </div>
        <p className="pt-3 additional-info">
          This establishment occupies a prominent location in Hadapsar. It is an
          effortless task in commuting to this establishment as there are
          various modes of transport readily available. It is at , Near Mahesh
          Bank Behind Vaibhav Theatre, which makes it easy for first-time
          visitors in locating this establishment. It is known to provide top
          service in the following categories: Multispeciality Hospitals,
          Coronavirus Vaccination Centres, Laparoscopic and endoscopic surgery,
          Stapler Circumcision, varicose veins laser, gall-bladder, appendix,
          hysterectomy, Anorectal surgery, Cancer Surgery-Oral, Breast,
          Colorectal, Uterine and Cervical Cancer, Urology-Kidney stone removal,
          Prostate surgery, laser endo-urology, Child consultation, diet
          counseling, Childhood vaccination upto 18 years, Breast
          reconstruction, hair transplant, laser surgery, General physician and
          diabetologist, and Registered maternity hospital, MTP- Medical
          Termination of Pregnancy.
        </p>
      </div>
    </div >
    <DoctersDetails/>
</>

  );
};

export default ReadMore;
