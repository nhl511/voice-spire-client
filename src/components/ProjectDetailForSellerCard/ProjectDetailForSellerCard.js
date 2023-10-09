import React from "react";
import "./ProjectDetailForSellerCard.css";
import ReactAudioPlayer from "react-audio-player";
import moment from "moment";
import { Link } from "react-router-dom";

export default function ProjectDetailForSellerCard({ voice }) {
  return (
    <div>
      <div className="uvipc-display">
        <div className="uvipc-card">
          <div className="uvipc-avatar">
            <img src={voice.voiceSeller.avatarLink} alt="avatar" />
          </div>
          <div className="uvipc-main">
            <div className="uvipc-info">
              <span className="uvipc-fullName">
                {voice.voiceSeller.fullname}
              </span>
              {/* <span class="uvipc-gender">{` | Giọng ${voice.voiceDetails[0].voiceGender}`}</span> */}
            </div>
            <div className="uvipc-createDate">
              {/* <span>{moment(voice.createDate).format("DD/MM/yyyy")}</span> */}
            </div>
            <div className="uvipc-audio">
              <ReactAudioPlayer src={voice.linkVoice} controls />
            </div>
          </div>
          <div className="uvipc-demo">
            <Link to={voice.linkVoice} download="Test-Docx-Demo" target="blank">
              <button>Download</button>
            </Link>
          </div>
        </div>
      </div>
      {voice.feedback && (
        <div className="uvipc-edit">
          <div className="uvipc-content">
            <span className="uvipc-requestEdit">Yêu cầu chỉnh sửa: </span>
            <span className="uvipc-contentEdit">{voice.feedback}</span>
          </div>
        </div>
      )}
    </div>
  );
}
