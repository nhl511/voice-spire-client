import React from "react";
import "./Navbar.css";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { auth } = useAuth();
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/img/logo.png" alt="" className="logo-img" />
        </div>
        {auth.role ? (
          auth.role[0] === "buyer" ? (
            <>
              <Link to="/upload" className="link">
                <span>Đăng tải dự án</span>
              </Link>
              <Link to="/voices" className="link">
                <span>Tìm kiếm giọng đọc</span>
              </Link>

              <Link to="/tpfb" className="link">
                <span>Quản lí dự án</span>
              </Link>
              <Link to="" className="link">
                <span>Thông tin tài khoản</span>
              </Link>
            </>
          ) : auth.role[0] === "seller" ? (
            <>
              <Link to="/your-voice" className="link">
                <span>Giọng đọc của tôi</span>
              </Link>
              <Link to="/posts" className="link">
                <span>Tìm kiếm dự án</span>
              </Link>
              <Link to="/profile" className="link">
                <span>Thông tin tài khoản</span>
              </Link>
              <Link to="/tpfs" className="link">
                <span>Dự án của tôi</span>
              </Link>
            </>
          ) : (
            auth.role[0] === "manager" && (
              <>
                <Link to="/postedprojectsmanagement" className="link">
                  <span>Quản lí dự án đăng tải</span>
                </Link>
                <Link to="/sentprojectsmanagement" className="link">
                  <span>Quản lí dự án gửi</span>
                </Link>
                <Link to="/lv" className="link">
                  <span>Quản lí giọng đọc</span>
                </Link>
              </>
            )
          )
        ) : (
          <>
            <Link to="/register" className="link">
              <span>Tạo tài khoản giọng đọc</span>
            </Link>
            <Link to="/register2" className="link">
              <span>Tạo tài khoản tuyển dụng</span>
            </Link>
            <Link to="/" className="link">
              <span>Đăng nhập</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
