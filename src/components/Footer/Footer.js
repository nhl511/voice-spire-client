import React from "react";
import "./Footer.css";

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
              <img
                src="/img/facebook.png"
                alt=""
                className="facebook-logo-img"
              />
              <img src="/img/tiktok.png" alt="" className="tiktok-logo-img" />
              <img src="/img/instagram.png" alt="" className="ig-logo-img" />
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
