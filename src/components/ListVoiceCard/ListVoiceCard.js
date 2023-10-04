import React from "react";
import "./ListVoiceCard.css";
import ReactAudioPlayer from "react-audio-player";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";

const ListVoiceCard = ({ voice }) => {
  return (
    <div className="listVoice-card">
      <div className="listVoice-avatar">
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
      </div>
      <div className="listVoice-info">
        <div className="listVoice-personal">
          <span>{voice.voiceSeller.fullname}</span> <br />
          <span>null</span>
        </div>
        <div className="listVoice-sound">
          <ReactAudioPlayer src={voice.mainVoiceLink} controls audio="1" />
        </div>
        <div className="listVoice-time">
          <span>{moment(voice.createDate).format("DD/MM/yyyy")}</span>
        </div>
      </div>
      <div className="listVoice-icon">
        <MoreHorizIcon />
      </div>
    </div>
  );
};

export default ListVoiceCard;
