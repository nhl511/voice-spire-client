import React, { useEffect, useState } from "react";
import "./SellerProfile.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import axios, {
  getSellerProfile,
  updateSellerProfile,
  uploadImage,
} from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import moment from "moment";

export default function SellerProfile() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  );
  const { auth } = useAuth();
  const [inputFullName, setInputFullName] = useState();
  const [inputBirthDay, setInputBirthDay] = useState();
  const [inputPhone, setInputPhone] = useState();
  const [inputGender, setInputGender] = useState();
  const [inputBankNumber, setInputBankNumber] = useState();
  const [inputBankName, setInputBankName] = useState();
  const [inputBankAccountName, setInputBankAccountName] = useState();
  const [inputAddress, setInputAddress] = useState();
  const uploadImg = "/api/Buyers/UploadImageFile";

  useEffect(() => {
    getSellerProfile(auth.userId)
      .then((json) => {
        setUser(json);
        if (json.avatarLink) {
          setAvatar(json.avatarLink);
        }
        setInputFullName(json.fullname);
        setInputBirthDay(json.birthDay);
        setInputPhone(json.phone);
        setInputGender(json.gender);
        setInputBankNumber(json.bankNumber);
        setInputBankName(json.bankName);
        setInputBankAccountName(json.bankAccountName);
        setInputAddress(json.address);
      })

      .then((json) => setLoading(false));
  }, [auth.userId]);

  const handleUploadAvatar = async (e) => {
    const headers = {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    };
    const fileImg = {
      file: e.target.files[0],
    };

    try {
      await axios
        .post(uploadImg, fileImg, { headers })
        .then((response) => {
          if (response.status === 200) {
            console.log("thumbnail = 200");
            setAvatar(response.data);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    updateSellerProfile(
      auth.userId,
      inputFullName,
      inputPhone,
      user.email,
      user.password,
      inputBirthDay,
      user.introduce,
      inputAddress,
      inputGender,
      avatar,
      user.rateAvg,
      inputBankName,
      inputBankNumber,
      inputBankAccountName,
      user.googleId,
      user.status
    );
  };
  return (
    <div className="sellerProfile-container">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="sellerProfile-card">
            <div className="sellerProfile-image">
              <div className="sellerprofile-avatar">
                <img onClick={() => setOpen(!open)} src={avatar} />
                {open && (
                  <div className="update-avatar">
                    <input
                      type="file"
                      id="avatar"
                      hidden
                      accept=".png, .jpg, .jpeg"
                      onChange={handleUploadAvatar}
                    />
                    <label htmlFor="avatar">
                      Cập nhật ảnh đại diện của bạn
                    </label>
                  </div>
                )}
              </div>
            </div>
            <div className="sellerProfile-fullName">
              <input
                type="text"
                value={inputFullName}
                onChange={(e) => setInputFullName(e.target.value)}
              />
            </div>
            <div className="sellerProfile-displayGrid">
              <span className="sellerProfile-birthDay">Ngày sinh</span>

              <input
                type="date"
                value={moment(inputBirthDay).format("YYYY-MM-DD")}
                onChange={(e) => setInputBirthDay(e.target.value)}
              />
            </div>
            <div className="sellerProfile-displayGrid">
              <span className="sellerProfile-phone">Số điện thoại</span>
              <input
                type="text"
                value={inputPhone}
                onChange={(e) => setInputPhone(e.target.value)}
              />
            </div>
            <div className="sellerProfile-displayGrid">
              <span className="sellerProfile-gender">Giới tính</span>
              <select
                value={inputGender}
                onChange={(e) => setInputGender(e.target.value)}
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>
            <div className="sellerProfile-displayGrid">
              <span className="sellerProfile-bankNumber">Số tài khoản</span>
              <input
                type="text"
                value={inputBankNumber}
                onChange={(e) => setInputBankNumber(e.target.value)}
              />
            </div>
            <div className="sellerProfile-displayGrid">
              <span className="sellerProfile-bankName">Ngân hàng</span>
              <input
                type="text"
                value={inputBankName}
                onChange={(e) => setInputBankName(e.target.value)}
              />
            </div>
            <div className="sellerProfile-displayGrid">
              <span className="sellerProfile-accountName">Tên tài khoản</span>
              <input
                type="text"
                value={inputBankAccountName}
                onChange={(e) => setInputBankAccountName(e.target.value)}
              />
            </div>
            <div className="sellerProfile-displayGrid">
              <span className="sellerProfile-address">Địa chỉ</span>
              <input
                type="text"
                value={inputAddress}
                onChange={(e) => setInputAddress(e.target.value)}
              />
            </div>
            <div className="sellerProfile-update">
              <button>Cập nhật</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
