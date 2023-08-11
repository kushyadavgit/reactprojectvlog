import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="foot-container">
        <div className="Sub-cont1">
          <h3>Social Media</h3>
          <ion-icon name="logo-facebook" className="fb"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-youtube"></ion-icon>
        </div>

        <div className="Sub-cont2">
          <h3>About Us</h3>
          <p>
            {" "}
            Name - kush yadav <br /> From - Lucknow Utter Pradesh{" "}
          </p>
        </div>

        <div className="Sub-cont3">
          <h3>Components</h3>
          <p>BollyWood</p>
          <p>Hollywood</p>
          <p>Technology</p>
          <p>Food</p>
          <p>Health</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
