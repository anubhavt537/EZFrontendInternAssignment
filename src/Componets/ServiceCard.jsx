
{/* created By anubhavt537@gmial.com

*/}

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-header">
        <img src={icon} alt={title} className="service-icon" />
        <h3 className="service-title">{title}</h3>
      </div>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
