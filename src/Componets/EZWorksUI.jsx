{/* created By anubhavt537@gmial.com
0.8 year experience in full stack engineer
*/}
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ServiceGrid from './ServiceGrid';
import ContactForm from './ContactForm';
import './styles.css';
import icon1 from '../assets/Research@4x@2x.png'
import icon2 from '../assets/Research@4x@2x1.png'
import icon3 from '../assets/Research@4x@2x2.png'
import icon4 from '../assets/Research@4x@2x3.png'
import icon5 from '../assets/Research@4x@2x4.png'
import icon6 from '../assets/Research@4x@2x5.png'

const EZWorksUI = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  const services = [
    {
      icon: icon1,
      title: "Presentation Design",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    },
    {
      icon: icon2,
      title: "Audio - Visual Production",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    },
    {
      icon: icon3,
      title: "Translation Services",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    },
    {
      icon: icon4,
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    },
    {
      icon: icon5,
      title: "Research & Analytics",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    },
    {
      icon: icon6,
      title: "Data Processing",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    }
  ];
  return (
    <div className={`container ${isMobile ? 'mobile' : 'desktop'}`}>
      {isMobile ? (
        // Mobile layout
        <>
          <Header isMobile={isMobile} />
          <h1 className="heading">A Suite of Business Support Services</h1>
          <p className="subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet
          </p>
          <ServiceGrid services={services} isMobile={isMobile} />
          <ContactForm isMobile={isMobile} showEmailInput={true} />
        </>
      ) : (
        // Desktop layout
        <div className="main-content">
          <div className="left-section">
            <Header isMobile={isMobile} />
            <h1 className="heading">Suite Of Business Support Services</h1>
            <p className="subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>
            <ContactForm isMobile={isMobile} showEmailInput={true} />
          </div>
          <div className="right-section">
            <ServiceGrid services={services} isMobile={isMobile} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EZWorksUI;