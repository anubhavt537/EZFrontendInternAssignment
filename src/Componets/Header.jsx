{/* created By anubhavt537@gmial.com

*/}
import React from 'react';
import logo from '../assets/EZ Works Blue.png'
const Header = ({ isMobile }) => {
  return (
    <div className="logo-container">
      <div className="logo-box">
        <span className="logo-text"><img src={logo} alt="" /></span>
      </div>
    </div>
  );
};

export default Header;