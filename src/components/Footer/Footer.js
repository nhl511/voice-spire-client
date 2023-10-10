import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="logo">
            <img src="/img/logo.png" alt="" />
          </div>
          <div className="info">
            <h3>ABOUT US</h3>
            <span>Chi tiết về Voice Market</span>
            <span>Email: voicemarketFPTU@gmail.com</span>
            <span>Phone: 0929828326</span>
            <div className="social">
              <Link
                to="https://www.facebook.com/profile.php?id=100063685652503&notif_id=1696852942215316&notif_t=top_fans_fan&ref=notif"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/facebook.png"
                  alt=""
                  className="facebook-logo-img"
                />
              </Link>
              <Link
                to="https://www.instagram.com/servicevoicespire/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/instagram.png" alt="" className="ig-logo-img" />
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <h3>VOICE SPIRE</h3>
          <span>Mang đến sự lựa chọn phù hợp nhất cho bạn</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
