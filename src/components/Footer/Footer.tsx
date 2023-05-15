import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer_container">
        <div>Movie App</div>
        <div>©{new Date().getFullYear()}. Movie</div>
      </div>
    </div>
  );
};

export default Footer;
