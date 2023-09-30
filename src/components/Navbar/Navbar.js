import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/img/logo.png" alt="" className="logo-img" />
        </div>
        <span>Giọng đọc tiêu biểu</span>
        <span>Tìm giọng đọc</span>
        <span>Đăng tải tuyển dụng</span>
        <span>Cộng dồng Voice Spire</span>
      </div>
    </div>
  );
};

export default Navbar;
