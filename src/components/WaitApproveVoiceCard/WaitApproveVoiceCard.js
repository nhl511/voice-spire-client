import moment from "moment";
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./WaitApproveVoiceCard.css";

const WaitApproveVoiceCard = ({ voice }) => {
  return (
    <div className="waitapprovevoicecard">
      <div className="waitapprovevoicecard-avatar">
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
      </div>
      <div className="waitapprovevoicecard-info">
        <div className="waitapprovevoicecard-personal">
          <span>{voice.voiceSeller.fullname}</span> <br />
        </div>
        <div className="waitapprovevoicecard-time">
          <span>{moment(voice.createDate).format("DD/MM/yyyy")}</span>
        </div>
        <div className="waitapprovevoicecard-sound">
          <ReactAudioPlayer src={voice.mainVoiceLink} controls audio="1" />
        </div>
      </div>
      <div className="waitapprovevoicecard-notify">
        <span>Giọng của bạn đang chờ duyệt</span>
      </div>
    </div>
  );
};

export default WaitApproveVoiceCard;
