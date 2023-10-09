import React from "react";
import "./ApprovedVoiceCard.css";
import ReactAudioPlayer from "react-audio-player";
import moment from "moment";
const ApprovedVoiceCard = ({ voice }) => {
  return (
    <div className="approvedvoicecard">
      <div className="approvedvoicecard-container">
        <div className="card">
          <div className="avatar">
            <img
              src={
                voice.voiceSeller.avatarLink
                  ? voice.voiceSeller.avatarLink
                  : "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              }
              alt="avatar"
            />
          </div>
          <div className="info">
            <span className="fullname">{voice.voiceSeller.fullname}</span>
            {moment(voice.createDate).format("DD/MM/yyyy")}
          </div>
          <div className="audio">
            <ReactAudioPlayer src={voice.mainVoiceLink} controls />
          </div>
          <div className="detail">
            <div className="detail-prop">
              <span>Giới tính giọng đọc: </span>
              <span>{voice.voiceGender}</span>
            </div>
            <div className="detail-prop">
              <span className="detail-prop">Vùng miền: </span>
              <span>{voice.voiceRegion}</span>
            </div>
            <div className="detail-prop">
              <span className="detail-prop">Tone giọng: </span>
              {voice.voiceTone === 5 && <span>Rất cao</span>}
              {voice.voiceTone === 4 && <span>Cao</span>}
              {voice.voiceTone === 3 && <span>Vừa</span>}
              {voice.voiceTone === 2 && <span>Thấp</span>}
              {voice.voiceTone === 1 && <span>Rất thấp</span>}
              {voice.voiceTone === 0 && <span>Không có</span>}
            </div>
            <div className="detail-prop">
              <span className="detail-prop">Độ truyền cảm: </span>
              {voice.voiceInspirational === 5 && <span>Rát tốt</span>}
              {voice.voiceInspirational === 4 && <span>Tốt</span>}
              {voice.voiceInspirational === 3 && <span>Khá</span>}
              {voice.voiceInspirational === 2 && <span>Trung bình</span>}
              {voice.voiceInspirational === 1 && <span>Kém</span>}
              {voice.voiceInspirational === 0 && <span>Không có</span>}
            </div>
            <div className="detail-prop">
              <span className="detail-prop">Tốc độ đọc: </span>
              {voice.voiceSpeed === 3 && <span>Nhanh</span>}
              {voice.voiceSpeed === 2 && <span>Vừa</span>}
              {voice.voiceSpeed === 1 && <span>Chậm</span>}
              {voice.voiceSpeed === 0 && <span>Không có</span>}
            </div>
            <div className="detail-prop">
              <span className="detail-prop">Khả năng phát âm: </span>
              {voice.voicePronouce === 5 && <span>Rát tốt</span>}
              {voice.voicePronouce === 4 && <span>Tốt</span>}
              {voice.voicePronouce === 3 && <span>Khá</span>}
              {voice.voicePronouce === 2 && <span>Trung bình</span>}
              {voice.voicePronouce === 1 && <span>Kém</span>}
              {voice.voicePronouce === 0 && <span>Không có</span>}
            </div>
            <div className="detail-prop">
              <span className="detail-prop">Thể hiển trọng âm: </span>
              {voice.voiceStress === 5 && <span>Rát tốt</span>}
              {voice.voiceStress === 4 && <span>Tốt</span>}
              {voice.voiceStress === 3 && <span>Khá</span>}
              {voice.voiceStress === 2 && <span>Trung bình</span>}
              {voice.voiceStress === 1 && <span>Kém</span>}
              {voice.voiceStress === 0 && <span>Không có</span>}
            </div>
            <div className="detail-prop">
              <span className="detail-prop">Chất giọng: </span>
              <span>{voice.voiceTypes[0].voiceTypeDetail}</span>
            </div>
            <div className="detail-prop">
              <span className="detail-prop">Tính chất phù hợp: </span>
              <span>{voice.voiceProperties[0].voicePropertyName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedVoiceCard;
