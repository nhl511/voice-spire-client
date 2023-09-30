import React, { useState } from "react";
import "./Register.css";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const RegisterSeller = () => {
  const registerSellerURL = '/api/VoiceSellers/Register';
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [phone, setPhone] = useState();
  const [fullName, setFullName] = useState();
  const [address, setAddress] = useState();
  const [birthDay, setBirthDay] = useState();
  const [gender, setGender] = useState('Nam');

  const handleRegister = async (e) => {
    e.preventDefault();

    let account = {
      fullname: fullName,
      phone: phone,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      birthDay: birthDay,
      introduce: null,
      address: address,
      gender: gender,
      avatarLink: null,
      rateAvg: 0,
      bankName: null,
      bankNumber: null,
      bankAccountName: null,
      googleId: null,
      status: true,
    }

    const headers = {
      'accept': '*/*'
    }
    // 400: Email has already been used - Password's length must greater than 8 - Password not match - Data Invalid (birthday),
    // chưa validation: fullName để trống, email thiếu .com, .vn..., phone length <= 10, phone để trống
    try {
      await axios.post(registerSellerURL, account, { headers })
      console.log(account);
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-card">
          <div className="left">
            <div className="center-item">
              <h3>TẠO TÀI KHOẢN GIỌNG ĐỌC</h3>
              <p>Vui lòng nhập đầy đủ các thông tin được yêu cầu</p>
            </div>
            <form onSubmit={handleRegister}>
              <div className="col-item">
                <span>Email*</span>
                <input type="email" placeholder="Nhập Email của bạn" onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="col-item">
                <span>Mật Khẩu*</span>
                <input type="password" placeholder="Nhập mật khẩu" onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="col-item">
                <span>Nhập lại mật khẩu*</span>
                <input type="password" placeholder="Nhập lại mật khẩu" onChange={(e) => setPasswordConfirm(e.target.value)} required />
              </div>
              <div className="col-item">
                <span>Số điện thoại*</span>
                <input type="text" placeholder="Nhập số điện thoại" onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div className="col-item">
                <span>Họ và tên*</span>
                <input type="text" placeholder="Nhập họ và tên" onChange={(e) => setFullName(e.target.value)} required />
              </div>
              <div className="col-item">
                <span>Địa chỉ*</span>
                <input type="text" placeholder="Nhập địa chỉ" onChange={(e) => setAddress(e.target.value)} required />
              </div>
              <div className="col-item">
                <span>Ngày sinh*</span>
                <DatePicker selected={birthDay} onChange={(date) => setBirthDay(date)}
                  dateFormat='yyyy-MM-dd' showYearDropdown scrollableYearDropdown
                  yearDropdownItemNumber={50} placeholderText="Chọn ngày tháng năm sinh" required />
              </div>
              <div className="col-item">
                <span>Giới tính*</span>
                <select defaultValue={gender} onChange={(e) => setGender(e.target.value)} >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value='Khác'>Khác</option>
                </select>
              </div>
              <div className="row-item">
                <input type="checkbox" required />
                <span>
                  Tôi đã đọc và đồng ý với <b>điều khoản</b> của VoiceMarket
                </span>
              </div>
              <div className="button">
                <button type="submit">Đăng ký</button>
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

export default RegisterSeller;
