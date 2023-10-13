import React from "react";
import "./AcceptApplicationCard.css";
import ReactAudioPlayer from "react-audio-player";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { acceptApplications } from "../../api/axios";

export default function AcceptApplicationCard({ voice }) {
  const navigate = useNavigate();
  let myArray = "";
  let myArray2 = "";
  if (voice.voiceDetail.voiceTypes !== null) {
    const myString = voice.voiceDetail.voiceTypes[0].voiceTypeDetail;
    myArray = myString.split(", ");
  }
  if (voice.voiceDetail.voiceProperties !== null) {
    const myString2 = voice.voiceDetail.voiceProperties[0].voicePropertyName;
    myArray2 = myString2.split(", ");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    acceptApplications(voice.voiceJobId, voice.voiceProjectId);
    navigate("/tpfb");
  };

  return (
    <div className="aac-display">
      <div className="aac-card">
        <div className="aac-avatar">
          <img
            src={
              voice.voiceSeller.avatarLink
                ? voice.voiceSeller.avatarLink
                : "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            alt="avatar"
          />
        </div>
        <div className="aac-main">
          <div className="aac-info">
            <span className="aac-fullName">{voice.voiceSeller.fullname}</span>
            <span class="aac-gender">{` | Giọng ${voice.voiceDetail.voiceGender}`}</span>
          </div>
          <div className="aac-createDate">
            <span>
              {moment(voice.voiceDetail.createDate).format("DD/MM/yyyy")}
            </span>
          </div>
          <div className="play">
            <ReactAudioPlayer src={voice.voiceDetail.mainVoiceLink} controls />
          </div>
        </div>
        <div className="aac-type">
          {myArray.length !== 0 && myArray.map((item) => <span>{item}</span>)}

          {myArray.length !== 0 &&
            myArray2.map((item2) => <span>{item2}</span>)}
        </div>
        <div className="aac-stats">
          <span>Đánh giá</span>
          <div className="aac-rating">
            <div className="aac-star">
              <span>{voice.voiceSeller.rateAvg}</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1200px-Star_icon_stylized.svg.png"
                alt="star"
              />
            </div>
          </div>

          <div className="aac-price">
            {/* <span>{`Giá: ${voice.price}đ/ 100 từ`}</span> */}
          </div>
          <div className="aac-demo">
            <Link to={voice.linkDemo} download="Test-Docx-Demo" target="blank">
              <button>Download demo</button>
            </Link>
          </div>
        </div>
        <div className="aac-button">
          <button onClick={handleSubmit}>Chấp nhận ứng tuyển</button>
        </div>
      </div>
    </div>
  );
}
