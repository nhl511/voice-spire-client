import React, { useEffect, useState } from "react";
import "./VoiceDetail.css";
import ReactAudioPlayer from "react-audio-player";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios, { getVoice } from "../../api/axios";
import moment from "moment";

const VERIFY_VOICE_URL = "/api/VoiceDetails";

const VoiceDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [voice, setVoice] = useState();
  const [loading, setLoading] = useState(true);

  const [voiceGender, setVoiceGender] = useState();
  const [voiceRegion, setVoiceRegion] = useState();
  const [voiceTone, setVoiceTone] = useState(0);
  const [voiceInspirational, setVoiceInspirational] = useState(0);
  const [voiceSpeed, setVoiceSpeed] = useState(0);
  const [voicePronouce, setVoicePronouce] = useState(0);
  const [voiceStress, setVoiceStress] = useState(0);
  const [checkValue, setCheckValue] = useState([]);
  const [checkValue2, setCheckValue2] = useState([]);
  useEffect(() => {
    getVoice(id)
      .then((json) => setVoice(json))
      .then((json) => setLoading(false));
  }, [id]);
  const handleChangeCheck = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckValue((pre) => [...pre, value]);
    } else {
      setCheckValue((pre) => {
        return [...pre.filter((type) => type !== value)];
      });
    }
  };

  const handleChangeCheck2 = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckValue2((pre) => [...pre, value]);
    } else {
      setCheckValue2((pre) => {
        return [...pre.filter((prop) => prop !== value)];
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const voiceId = e.target.elements.voiceid.value;
    const sellerId = e.target.elements.sellerid.value;
    const date = e.target.elements.date.value;
    const voiceLink = e.target.elements.voicelink.value;
    const price = e.target.elements.price.value;

    let postData = {
      voiceDetailId: Number(voiceId),
      voiceSellerId: Number(sellerId),
      createDate: date,
      mainVoiceLink: voiceLink,
      price: Number(price),
      voiceGender,
      voiceRegion,
      voiceTone: Number(voiceTone),
      voiceLocal: null,
      voiceInspirational: Number(voiceInspirational),
      voiceStress: Number(voiceStress),
      voiceSpeed: Number(voiceSpeed),
      voicePronouce: Number(voicePronouce),
      numberOfEdit: 0,
      isApprove: true,
      status: true,
      voiceTypes: [
        {
          voiceSellerId: Number(sellerId),
          voiceTypeDetail: checkValue.join(", "),
        },
      ],
      voiceProperties: [
        {
          voiceSellerId: Number(sellerId),
          voicePropertyName: checkValue2.join(", "),
        },
      ],
      voiceSeller: null,
    };
    axios
      .post(VERIFY_VOICE_URL, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        navigate("/listvoice");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="voicedetail">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <div className="voicedetail-container">
          <div className="voicedetail-card">
            <div className="voicedetail-avatar">
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
            </div>
            <form onSubmit={handleSubmit}>
              <input value={voice.voiceDetailId} name="voiceid" hidden />
              <input value={voice.voiceSellerId} name="sellerid" hidden />
              <input value={voice.createDate} name="date" hidden />
              <input value={voice.mainVoiceLink} name="voicelink" hidden />
              <input value={voice.price} name="price" hidden />

              <div className="voicedetail-info">
                <span style={{ fontSize: 22 }}>
                  {voice.voiceSeller.fullname}
                </span>
                <br />
                <span>(100 người theo dõi)</span>
                <br />
                <span style={{ color: "black", fontWeight: 400 }}>
                  {moment(voice.createDate).format("DD/MM/yyyy")}
                </span>
              </div>
              <div className="voicedetail-audio">
                <ReactAudioPlayer src={voice.mainVoiceLink} controls />
              </div>
              <div className="voicedetail-detail">
                <div className="voicedetail-detail-info voicedetail-display">
                  <span>Giới tính giọng đọc</span>
                  <select
                    value={voiceGender}
                    onChange={(e) => setVoiceGender(e.target.value)}
                  >
                    <option value="">Vui lòng chọn</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>
                <div className="voicedetail-detail-info voicedetail-display">
                  <span>Vùng miền</span>
                  <select
                    value={voiceRegion}
                    onChange={(e) => setVoiceRegion(e.target.value)}
                  >
                    <option value="">Vui lòng chọn</option>
                    <option value="Miền Nam">Miền Nam</option>
                    <option value="Miền Bắc">Miền Bắc</option>
                    <option value="Miền Trung">Miền Trung</option>
                  </select>
                </div>
                <div className="voicedetail-detail-info voicedetail-display">
                  <span>Tone giọng</span>
                  <select
                    value={voiceTone}
                    onChange={(e) => setVoiceTone(e.target.value)}
                  >
                    <option value="0">Vui lòng chọn</option>
                    <option value="1">Rất thấp</option>
                    <option value="2">Thấp</option>
                    <option value="3">Vừa</option>
                    <option value="4">Cao</option>
                    <option value="5">Rất cao</option>
                  </select>
                </div>
                <div className="voicedetail-detail-info voicedetail-display">
                  <span>Độ truyền cảm</span>
                  <select
                    value={voiceInspirational}
                    onChange={(e) => setVoiceInspirational(e.target.value)}
                  >
                    <option value="0">Vui lòng chọn</option>
                    <option value="1">Kém</option>
                    <option value="2">Trung bình</option>
                    <option value="3">Khá</option>
                    <option value="4">Tốt</option>
                    <option value="5">Rất tốt</option>
                  </select>
                </div>
                <div className="voicedetail-detail-info voicedetail-display">
                  <span>Tốc độ đọc</span>
                  <select
                    value={voiceSpeed}
                    onChange={(e) => setVoiceSpeed(e.target.value)}
                  >
                    <option value="0">Vui lòng chọn</option>
                    <option value="1">Chậm</option>
                    <option value="2">Vừa</option>
                    <option value="3">Nhanh</option>
                  </select>
                </div>
                <div className="voicedetail-detail-info voicedetail-display">
                  <span>Khả năng phát âm</span>
                  <select
                    value={voicePronouce}
                    onChange={(e) => setVoicePronouce(e.target.value)}
                  >
                    <option value="0">Vui lòng chọn</option>
                    <option value="1">Kém</option>
                    <option value="2">Trung bình</option>
                    <option value="3">Khá</option>
                    <option value="4">Tốt</option>
                    <option value="5">Rất tốt</option>
                  </select>
                </div>
                <div className="voicedetail-detail-info voicedetail-display">
                  <span>Thể hiện trọng âm</span>
                  <select
                    value={voiceStress}
                    onChange={(e) => setVoiceStress(e.target.value)}
                  >
                    <option value="0">Vui lòng chọn</option>
                    <option value="1">Kém</option>
                    <option value="2">Trung bình</option>
                    <option value="3">Khá</option>
                    <option value="4">Tốt</option>
                    <option value="5">Rất tốt</option>
                  </select>
                </div>
                <div className="voicedetail-detail-info ">
                  <span>Chất giọng</span>
                  <div className="voicedetail-show">
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Mạnh mẽ"
                        onChange={handleChangeCheck}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Mạnh mẽ</label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Trẻ trung"
                        onChange={handleChangeCheck}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Trẻ trung</label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Trung niên"
                        onChange={handleChangeCheck}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Trung niên</label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Giọng ấm"
                        onChange={handleChangeCheck}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Giọng ấm</label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Tươi mới"
                        onChange={handleChangeCheck}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">
                        Tươi mới <br />
                      </label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Hài hước"
                        onChange={handleChangeCheck}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Hài hước</label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Tự tin"
                        onChange={handleChangeCheck}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Tự tin</label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Dịu dàng"
                        onChange={handleChangeCheck}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Dịu dàng</label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Trẻ em"
                        onChange={handleChangeCheck}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Trẻ em</label>
                    </div>
                  </div>
                </div>
                <div className="voicedetail-detail-info voicedetail-show">
                  <span>Tính chất phù hợp</span>
                  <br />
                  <div className="voicedetail-show">
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Quảng cáo"
                        onChange={handleChangeCheck2}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Quảng cáo</label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Kể Chuyện"
                        onChange={handleChangeCheck2}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Kể chuyện</label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Thuyết trình"
                        onChange={handleChangeCheck2}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Thuyết trình</label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Thuyết minh"
                        onChange={handleChangeCheck2}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Thuyết minh</label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Review phim"
                        onChange={handleChangeCheck2}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">
                        Review phim <br />
                      </label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Thời sự"
                        onChange={handleChangeCheck2}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Thời sự</label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        value="Thông báo"
                        onChange={handleChangeCheck2}
                        className="checkbox"
                      />
                      <label className="voicedetail-label">Thông báo</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="voicedetail-button">
                <button className="confirm">Xác nhận</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceDetail;
