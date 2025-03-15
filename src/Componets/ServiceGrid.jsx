{/* created By anubhavt537@gmial.com

*/}
import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceGrid = ({ services, isMobile }) => {
  return (
    <div className={`services-grid ${isMobile ? 'mobile' : 'desktop'}`}>
      {services.map((service, index) => (
        <ServiceCard 
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;