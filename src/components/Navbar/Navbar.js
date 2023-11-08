import React, { useEffect, useState } from "react";
import "./Navbar.css";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { getBuyerProfile, getSellerProfile } from "../../api/axios";

const Navbar = () => {
  const { auth } = useAuth();
  const [user, setUser] = useState();
  const [menu, setMenu] = useState(false);
  const [menuRegister, setMenuRegister] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.role) {
      if (auth.role[0] === "buyer") {
        getBuyerProfile(auth.userId)
          .then((json) => setUser(json))
          .then((json) => setLoading(false));
      } else if (auth.role[0] === "seller") {
        getSellerProfile(auth.userId)
          .then((json) => setUser(json))
          .then((json) => setLoading(false));
      }
    }
  }, [auth.userId]);
  console.log(user);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/img/logo.png" alt="" className="logo-img" />
        </div>
        {auth.role ? (
          auth.role[0] === "buyer" ? (
            <>
              <div className="right-section">
                <Link to="/upload" className="link">
                  <span className="item">Đăng tải dự án</span>
                </Link>
                <Link to="/voices" className="link">
                  <span className="item">Tìm kiếm giọng đọc</span>
                </Link>

                <Link to="/tpfb" className="link">
                  <span className="item">Quản lí dự án</span>
                </Link>
                <Link to="/analysis" className="link">
                  <span className="item">Phân tích văn bản</span>
                </Link>
                {loading ? (
                  <span>Welcome</span>
                ) : (
                  <div className="wrapper-user-info-navbar">
                    <div
                      className="user-info-navbar"
                      onClick={() => {
                        setMenu(!menu);
                      }}
                    >
                      <span>{user.fullname}</span>
                    </div>
                    {menu && (
                      <div className="menu">
                        <span onClick={() => setMenu(false)}>
                          Thông tin của tổ chức
                        </span>
                        <hr />
                        <span
                          onClick={() => {
                            localStorage.removeItem("user");
                            window.location.reload();

                            navigate("/");
                          }}
                        >
                          Đăng xuất
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : auth.role[0] === "seller" ? (
            <>
              <div className="right-section">
                <Link to="/your-voice" className="link">
                  <span className="item">Giọng đọc của tôi</span>
                </Link>
                <Link to="/posts" className="link">
                  <spa className="item">Tìm kiếm dự án</spa>
                </Link>
                <Link to="/tpfs" className="link">
                  <span className="item">Dự án của tôi</span>
                </Link>
                {loading ? (
                  <span>Welcome</span>
                ) : (
                  <div className="wrapper-user-info-navbar">
                    <div
                      className="user-info-navbar"
                      onClick={() => {
                        setMenu(!menu);
                      }}
                    >
                      <img src={user.avatarLink} alt="" />
                      <span>{user.fullname}</span>
                    </div>
                    {menu && (
                      <div className="menu">
                        <Link to="/profile" className="link">
                          <span onClick={() => setMenu(false)}>
                            Thông tin của tôi
                          </span>
                        </Link>
                        <hr />
                        <span
                          onClick={() => {
                            localStorage.removeItem("user");
                            window.location.reload();

                            navigate("/");
                          }}
                        >
                          Đăng xuất
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : (
            auth.role[0] === "manager" && (
              <>
                <div className="right-section">
                  <Link to="/postedprojectsmanagement" className="link">
                    <span className="item">Quản lí dự án đăng tải</span>
                  </Link>
                  <Link to="/sentprojectsmanagement" className="link">
                    <span className="item">Quản lí dự án gửi</span>
                  </Link>
                  <Link to="/lv" className="link">
                    <span className="item">Quản lí giọng đọc</span>
                  </Link>
                  <div className="wrapper-user-info-navbar">
                    <div
                      className="user-info-navbar"
                      onClick={() => {
                        setMenu(!menu);
                      }}
                    >
                      <img src="/img/voicespire.png" alt="" />
                      <span>Voice Spire Manager</span>
                    </div>
                    {menu && (
                      <div className="menu">
                        <span onClick={() => setMenu(false)}>
                          Thông tin người quản lí
                        </span>
                        <hr />
                        <span
                          onClick={() => {
                            localStorage.removeItem("user");
                            window.location.reload();

                            navigate("/");
                          }}
                        >
                          Đăng xuất
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )
          )
        ) : (
          <>
            <div className="right-section">
              <Link to="/" className="link">
                <div className="login-wrapper">
                  <span
                    className="login-item"
                    onClick={() => {
                      setMenuRegister(false);
                    }}
                  >
                    Đăng nhập
                  </span>
                </div>
              </Link>
              <div className="register-wrapper">
                <span
                  className="register-item"
                  onClick={() => {
                    setMenuRegister(!menuRegister);
                  }}
                >
                  Đăng ký
                </span>
                {menuRegister && (
                  <div className="menu">
                    <Link to="/register" className="link">
                      <span
                        onClick={() => {
                          setMenuRegister(false);
                        }}
                      >
                        Tạo tài khoản giọng đọc
                      </span>
                    </Link>
                    <Link
                      to="/register2"
                      className="link"
                      onClick={() => {
                        setMenuRegister(false);
                      }}
                    >
                      <span>Tạo tài khoản tuyển dụng</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
