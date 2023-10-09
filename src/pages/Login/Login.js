import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const LOGIN_URL = "/api/VoiceSellers/Login";
const VoiceSellersURL = "/api/VoiceSellers/";
const BuyerURL = "/api/Buyers/";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const errRef = useRef();

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const checkBankAccount = async (userId, role) => {
    const headers = {
      accept: "text/plain",
    };
    if (role === "seller") {
      try {
        await axios
          .get(VoiceSellersURL + userId, { headers })
          .then((response) => {
            if (response.status === 200) {
              if (
                !response.data?.bankName ||
                !response.data?.bankNumber ||
                !response.data?.bankAccountName
              ) {
                navigate("/bank");
              } else {
                navigate("/profile");
              }
            }
          });
      } catch (error) {
        console.log(error.response?.data);
      }
    }
    if (role === "buyer") {
      try {
        await axios.get(BuyerURL + userId).then((response) => {
          if (response.status === 200) {
            if (
              !response.data?.bankName ||
              !response.data?.bankNumber ||
              !response.data?.bankAccountName
            ) {
              navigate("/bank");
            } else {
              navigate("/profile");
            }
          }
        });
      } catch (error) {
        console.log(error.response?.data);
      }
    }
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response?.data));

      const token = response?.data?.token;
      const roleStr = response?.data?.role;
      let userId = null;

      if (roleStr === "seller") {
        userId = response.data.voiceSeller.voiceSellerId;
      } else if (roleStr === "buyer") {
        userId = response.data.buyer.buyerId;
      }
      const role = roleStr.split(" ");
      checkBankAccount(userId, roleStr);
      setAuth({ userId, email, password, role, token });
      setEmail("");
      setPassword("");
      // if (roleStr === "buyer") {
      //   navigate("/voices", { replace: true });
      // } else if (roleStr === "seller") {
      //   navigate("/posts", { replace: true });
      // }
      navigate("/home", { replace: true });
      setLoading(false);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Sai Email hoặc mật khẩu");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-card">
          <div className="left">
            <div className="center-item">
              <h3>Đăng nhập</h3>
              <p>
                Vui lòng đăng nhập để sử dụng đầy đủ các tính năng của
                VoiceMarket
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="col-item">
                <span>Email</span>
                <input
                  type="email"
                  ref={emailRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Nhập email của bạn"
                  required
                />
              </div>
              <div className="col-item">
                <span>Mật khẩu</span>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <div className="row-item">
                <input type="checkbox" />
                <i>Remember me</i>
                <span>Quên mật khẩu?</span>
              </div>
              <div className="button">
                <button className={loading ? "disabled" : ""}>
                  {loading ? (
                    <div className="loading-login">
                      <div className="loading-login-container">
                        <div className="loader-login"></div>
                      </div>
                    </div>
                  ) : (
                    <span>Đăng nhập</span>
                  )}
                </button>
              </div>
            </form>
            <div className="google">
              <button>
                <img src="/img/google.png" className="google-logo-img" />
              </button>
            </div>
            <div className="row-item">
              <i>
                Bạn chưa có tài khoản VoiceMarket?<strong> Đăng ký</strong> ngay
              </i>
            </div>
          </div>
          <div className="right">
            <div className="center-item">
              <h1>VOICE MARKET</h1>
            </div>
            <div className="col-item">
              <span>
                Hơn 7749 giọng đọc, đa dạng về lựa chọn để bạn có được kết quả
                ưng ý nhât
              </span>
              <span>
                Hệ thống phân tích, đưa ra lựa chọn tối ưu theo yêu cầu của bạn
              </span>
              <span>Kiểu giới thiệu về app của mình ở đây.......</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
