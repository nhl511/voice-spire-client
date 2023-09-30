import React, { useEffect, useState } from "react";
import "./VoiceProfile.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const VoiceProfile = () => {
  const uploadVoiceURL = "/api/VoiceSellers/UploadVoice";
  const uploadVoiceProfileURL = "/api/VoiceSellers/UploadVoiceProfile";
  const navigate = useNavigate();

  const [price, setPrice] = useState(0);
  const [numberOfEdit, setNumberOfEdit] = useState(0);
  const [uploadFile, setUploadFile] = useState();
  const [mp3File, setMp3File] = useState();

  const { auth } = useAuth();

  const handleUploadVoice = async (event) => {
    const headers = {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    };

    const file = {
      file: event.target.files[0],
    };

    try {
      await axios
        .post(uploadVoiceURL, file, { headers })
        .then((response) => {
          if (response.status === 200) {
            setMp3File(response.data);
            setUploadFile(event.target.files[0]);
            setUploadFile(event.target.files[0]);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadProfile = async (e) => {
    e.preventDefault();
    const uploadProfile = {
      voiceSellerId: auth.userId,
      linkVoice: mp3File,
      numberOfEdit: numberOfEdit,
      price: price,
    };
    const headers = {
      accept: "*/*",
      "Content-Type": "application/json-patch+json",
    };
    try {
      await axios
        .post(uploadVoiceProfileURL, uploadProfile, { headers })
        .then((response) => {
          if (response.status === 200) {
            alert("successfully uploaded");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("upload failed");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="voiceprofile">
        <div className="voiceprofile-container">
          <div className="title">
            <h3>Hoàn tất Profile giọng đọc của bạn</h3>
          </div>
          <div className="voiceprofile-card">
            <div className="col-item">
              <span className="sub-title">
                Để hoàn tất profile bạn vui lòng đọc văn bản dưới đây và gửi bản
                ghi âm giọng của bạn lên hệ thống.
              </span>
              <Link
                to="/mp3/test.docx"
                download="Test-Docx-Document"
                target="blank"
              >
                <button className="btn-download">Download Test.doc</button>
              </Link>
              <span className="note">
                Lưu ý: Khi thu âm vui lòng đọc rõ chữ, tránh tiếng ồn, khuyến
                cáo nên sử dụng micro hoặc các thiết bị thu âm để đạt được chất
                lượng phân tích tốt nhất từ hệ thống.
              </span>
            </div>
            <form onSubmit={handleUploadProfile}>
              <div className="col-item-left">
                <span>Mức giá cho giọng nói của bạn (Không bắt buộc):</span>
                <div className="row-item">
                  <div className="left">
                    <span>Giá</span>
                    <input
                      type="number"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <span>/Phút</span>
                  </div>
                  <div className="right">
                    <span>Số lần chỉnh sửa</span>
                    <input
                      type="number"
                      onChange={(e) => setNumberOfEdit(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-item">
                <input
                  type="file"
                  name="file"
                  id="upload-btn"
                  onChange={handleUploadVoice}
                  hidden
                  accept="audio/mpeg"
                />
                <label htmlFor="upload-btn" className="btn-upload">
                  Tải lên file ghi âm: {uploadFile?.name}
                </label>
                <button type="submit" className="btn-finish">
                  Hoàn tất
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceProfile;
