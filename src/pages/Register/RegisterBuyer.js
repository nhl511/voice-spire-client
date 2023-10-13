import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const RegisterBuyer = () => {
  const registerBuyerURL = "/api/Buyers/Register";
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [phone, setPhone] = useState();
  const [companyName, setCompanyName] = useState();
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(false);
  const [errorInput, setErrorInput] = useState('');

  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();

    let account = {
      fullname: companyName,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      phone: phone,
      bankName: null,
      bankAccountName: null,
      bankNumber: null,
      isPro: true,
      status: true,
    };

    const headers = {
      accept: "*/*",
    };

    try {
      await axios
        .post(registerBuyerURL, account, { headers })
        .then((response) => {
          if (response.status === 200) {
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error.response.data);
      setErrorInput(error.response.data);
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-card">
          <div className="left">
            <div className="center-item">
              <h3>TẠO TÀI KHOẢN TUYỂN DỤNG</h3>
              <p>Vui lòng nhập đầy đủ các thông tin được yêu cầu</p>
            </div>
            <form onSubmit={handleRegister}>
              <div className="col-item">
                <span>Email*</span>
                <input
                  type="email"
                  placeholder="Nhập Email của bạn"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="register-error">
                  {errorInput === "Email has already been used" && errorInput}
                </div>
              </div>
              <div className="col-item">
                <span>Mật Khẩu*</span>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="register-error">
                  {errorInput === "Password's length must greater than 8" && errorInput}
                </div>
              </div>
              <div className="col-item">
                <span>Nhập lại mật khẩu*</span>
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                />
                <div className="register-error">
                  {errorInput === "Password not match" && errorInput}
                </div>
              </div>
              <div className="col-item">
                <span>Số điện thoại*</span>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="col-item">
                <span>Tên doanh nghiệp*</span>
                <input
                  type="text"
                  placeholder="Nhập tên doanh nghiệp"
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>
              <div className="col-item">
                <span>Địa chỉ*</span>
                <input
                  type="text"
                  placeholder="Nhập địa chỉ"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="row-item">
                <input type="checkbox" required />
                <span>
                  Tôi đã đọc và đồng ý với <b>điều khoản</b> của VoiceMarket
                </span>
              </div>
              <div className="button">
                <button type="submit">
                  {loading ? <span>Loading...</span> : <span>Đăng Ký</span>}
                </button>
              </div>
            </form>
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

export default RegisterBuyer;
